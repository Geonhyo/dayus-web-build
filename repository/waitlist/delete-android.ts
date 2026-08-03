import { apiClient } from "@/repository/api-client";

/**
 * 수신 거부 — 명단에서 주소를 지운다.
 *
 * 토큰은 메일 링크로 받은 값 그대로다. 없는 토큰이어도 서버는 성공으로 답한다
 * (등록 여부를 응답으로 알려주지 않기 위해서).
 */
export default async function deleteAndroidWaitlistRepository(data: {
  token: string;
}): Promise<void> {
  await apiClient.post(
    `/waitlist/android/unsubscribe?t=${encodeURIComponent(data.token)}`
  );
}
