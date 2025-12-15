import { DeviceInfoModel } from "@/model/device-info";
import { apiClient } from "@/repository/api-client";

export default async function createAuthSessionRepository(data: {
  uid: string;
  deviceInfo: DeviceInfoModel;
}): Promise<{
  authorization: string;
}> {
  const response = await apiClient.post("/auth/session", data);
  return {
    authorization: response.headers.authorization,
  };
}
