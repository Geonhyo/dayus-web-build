import { ErrorResponse, isErrorResponse } from "@/class/error-response";
import { getAuthorization, saveAuthorization } from "@/util/token";
import axios, { AxiosError } from "axios";
import { updateAuthSessionRepository } from "./auth/session/update";

const MAX_TIMEOUT = 30000;

const INVALID_TOKEN = "INVALID_TOKEN";
const UNAUTHORIZED = "UNAUTHORIZED";

let reauthorizePromise: Promise<string | undefined> | null = null;

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: MAX_TIMEOUT,
});

export const initializeApiClient = (onUnauthorized: () => void) => {
  const reauthorize = async (): Promise<string | undefined> => {
    if (!reauthorizePromise) {
      reauthorizePromise = (async () => {
        try {
          const token = await updateAuthSessionRepository();
          await saveAuthorization(token.authorization);
          return token.authorization;
        } catch (error) {
          return undefined;
        } finally {
          reauthorizePromise = null;
        }
      })();
    }
    return reauthorizePromise;
  };

  const handleError = (
    error: AxiosError<ErrorResponse> | any
  ): ErrorResponse => {
    let data: ErrorResponse;
    if (
      !(error instanceof AxiosError) ||
      !isErrorResponse(error.response?.data)
    ) {
      data = new ErrorResponse(
        500,
        "알 수 없는 오류가 발생했습니다\n현재 페이지 정보와 함께 개발팀에 문의해주시면 감사하겠습니다"
      );
    } else {
      data = error.response?.data as ErrorResponse;
    }
    return data;
  };

  apiClient.interceptors.request.use(
    async (config) => {
      const authorization = await getAuthorization();
      if (authorization) {
        config.headers.Authorization = authorization;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response === undefined) {
        return Promise.reject(handleError(error));
      }
      const originalRequest = error.config;

      originalRequest._reauthorized = originalRequest._reauthorized || false;
      originalRequest._retry = originalRequest._retry || false;

      if (originalRequest._retry) {
        return Promise.reject(handleError(error));
      }

      switch (error.response.status) {
        case 401:
          switch (error.response.data.message) {
            case INVALID_TOKEN:
              if (originalRequest._reauthorized) {
                console.error("🔴 Reauthorization failed:", error.response);
                onUnauthorized();
                return Promise.reject();
              }

              originalRequest._reauthorized = true;
              try {
                const newAuthorization = await reauthorize();
                if (!newAuthorization) {
                  console.error("🔴 Reauthorization failed: No new token");
                  onUnauthorized();
                  return Promise.reject();
                }
                originalRequest.headers.Authorization = newAuthorization;
                return apiClient(originalRequest);
              } catch (retryError) {
                return Promise.reject(retryError);
              }
            case UNAUTHORIZED:
              onUnauthorized();
              return Promise.reject();
            default:
              return Promise.reject(handleError(error));
          }
        case 500:
          try {
            originalRequest._retry = true;
            return apiClient(originalRequest);
          } catch (retryError) {
            return Promise.reject(retryError);
          }
        default:
          console.error("API Error:", error.response);
          return Promise.reject(handleError(error));
      }
    }
  );
};
