import { apiClient } from "@/repository/api-client";

export const updateAuthSessionRepository = async (): Promise<{
  authorization: string;
}> => {
  const response = await apiClient.patch("/auth/session");
  return {
    authorization: response.headers.authorization,
  };
};
