import { ANDROID_WAITLIST_CONSENT_VERSION } from "@/constant/android-waitlist-consent";
import { apiClient } from "@/repository/api-client";

/**
 * 안드로이드 출시 알림 신청.
 *
 * 인증이 필요 없는 엔드포인트다. 로그인 기능을 잠시 내려둔 동안에도
 * 이 호출만은 살아 있어야 하므로 auth store 에 의존하지 않는다.
 *
 * consent 는 화면에서 실제로 체크된 경우에만 true 로 온다. 서버는 이 값이 없으면
 * 저장하지 않는다 — 이 수집의 근거가 그 동의뿐이기 때문이다.
 */
export default async function createAndroidWaitlistRepository(data: {
  email: string;
  consent: boolean;
}): Promise<void> {
  await apiClient.post(
    "/waitlist/android",
    {
      email: data.email,
      source: "web-download-android",
      consent: data.consent,
      consentVersion: ANDROID_WAITLIST_CONSENT_VERSION,
    },
    {
      headers: {
        // 출시 안내를 어떤 언어로 보낼지 고르는 데 쓴다.
        locale:
          typeof navigator !== "undefined" && navigator.language
            ? navigator.language.slice(0, 2)
            : "en",
      },
    }
  );
}
