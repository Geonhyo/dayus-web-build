import { AuthModel } from "@/model/auth";
import { apiClient } from "@/repository/api-client";

export default async function getAuthRepository(): Promise<AuthModel> {
  const response = await apiClient.get("/auth");
  return response.data;
}
