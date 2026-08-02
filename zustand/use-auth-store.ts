"use client";

import { AUTH_STATUS } from "@/constant/auth-status";
import { AuthModel } from "@/model/auth";
import { DeviceInfoModel } from "@/model/device-info";
import { create } from "zustand";

import { initializeApiClient } from "@/repository/api-client";
import getAuthRepository from "@/repository/auth/get";
import deleteAuthSessionRepository from "@/repository/auth/session/delete";
import { updateAuthSessionRepository } from "@/repository/auth/session/update";

import { initializeAccessTokenRef as initializeAuthorizationRef } from "@/util/token";

type AuthState =
  | { status: typeof AUTH_STATUS.AUTHORIZED; data: AuthModel }
  | { status: typeof AUTH_STATUS.UNAUTHORIZED; data: null }
  | { status: typeof AUTH_STATUS.LOADING; data: AuthModel | null };

interface AuthStore {
  authorization: string | null;
  auth: AuthState;

  /** internal setters */
  setAuthorization: (value: string | null) => void;
  setAuth: (value: AuthState) => void;

  /** utilities */
  getDeviceInfo: () => DeviceInfoModel;

  /** auth logic */
  reissue: () => Promise<void>;
  refreshAuthInfo: () => Promise<void>;
  onSessionExpired: () => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => {
  /** 초기화: API client + token reference 연결 */
  initializeAuthorizationRef(
    () => get().authorization,
    (v) => set({ authorization: v })
  );

  initializeApiClient(() => get().onSessionExpired());

  return {
    authorization: null,
    auth: { status: AUTH_STATUS.LOADING, data: null },

    /** setters */
    setAuthorization: (value) => set({ authorization: value }),
    setAuth: (value) => set({ auth: value }),

    /** 디바이스 정보 수집 */
    getDeviceInfo: () => {
      const userAgent = navigator.userAgent.toLowerCase();

      let deviceType: "desktop" | "mobile" | "tablet" = "desktop";
      if (/mobile|iphone|ipod|android.*mobile/.test(userAgent)) {
        deviceType = "mobile";
      } else if (/ipad|android(?!.*mobile)/.test(userAgent)) {
        deviceType = "tablet";
      }

      let osVersion = "unknown";
      if (userAgent.indexOf("win") > -1) osVersion = "Windows";
      else if (userAgent.indexOf("mac") > -1) osVersion = "MacOS";
      else if (/linux/.test(userAgent)) osVersion = "Linux";
      else if (/android/.test(userAgent)) osVersion = "Android";
      else if (/iphone|ipad|ipod/.test(userAgent)) osVersion = "iOS";

      let deviceName = "unknown web";
      if (userAgent.includes("chrome") && !userAgent.includes("edge"))
        deviceName = "Chrome web";
      else if (userAgent.includes("safari") && !userAgent.includes("chrome"))
        deviceName = "Safari web";
      else if (userAgent.includes("firefox")) deviceName = "Firefox web";
      else if (userAgent.includes("edg")) deviceName = "Edge web";

      deviceName = `${deviceType} ${deviceName}`;

      let deviceId = localStorage.getItem("device-id");
      if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem("device-id", deviceId);
      }

      return { deviceId, osVersion, deviceName };
    },

    /** 토큰 재발급 */
    reissue: async () => {
      const { setAuthorization, setAuth } = get();
      try {
        const newSession = await updateAuthSessionRepository();
        setAuthorization(newSession.authorization);
        const data = await getAuthRepository();
        setAuth({ status: AUTH_STATUS.AUTHORIZED, data });
      } catch {
        setAuth({ status: AUTH_STATUS.UNAUTHORIZED, data: null });
        setAuthorization(null);
      }
    },

    /** 유저 정보 새로고침 */
    refreshAuthInfo: async () => {
      const { auth, setAuth } = get();
      if (auth.status !== AUTH_STATUS.AUTHORIZED) return;

      try {
        const data = await getAuthRepository();
        setAuth({ status: AUTH_STATUS.AUTHORIZED, data });
      } catch (error) {
        console.error("🔴 Error during refreshAuthInfo:", error);
        setAuth({ status: AUTH_STATUS.UNAUTHORIZED, data: null });
      }
    },

    /** 세션 만료 시 콜백 */
    onSessionExpired: () => {
      get().setAuth({ status: AUTH_STATUS.UNAUTHORIZED, data: null });
      get().setAuthorization(null);
      alert("Your session has expired.\nPlease log in again.");
    },

    /** 로그아웃 */
    logout: async () => {
      const { setAuth, setAuthorization } = get();
      try {
        await deleteAuthSessionRepository();
      } finally {
        setAuth({ status: AUTH_STATUS.UNAUTHORIZED, data: null });
        setAuthorization(null);
      }
    },
  };
});
