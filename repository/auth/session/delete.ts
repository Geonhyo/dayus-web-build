import { apiClient } from "@/repository/api-client";

export default async function deleteAuthSessionRepository(): Promise<void> {
  await apiClient.delete("/auth/session");
}
