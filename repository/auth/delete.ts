import { apiClient } from "@/repository/api-client";

export default async function deleteAuthRepository(): Promise<void> {
  await apiClient.delete("/auth");
}
