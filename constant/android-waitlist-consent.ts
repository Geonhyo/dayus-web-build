/**
 * 안드로이드 대기자 명단 동의 문구.
 *
 * 이 수집은 개인정보처리방침이 아니라 이 문구 하나로 동의를 받는다.
 * 그래서 수집 항목 · 보내는 메일의 종류와 횟수 · 보관기간 · 거부해도 불이익 없음을
 * 여기서 전부 밝혀야 한다. 여기서 약속하지 않은 메일은 보낼 수 없다
 * (발송 문구: server/scripts/lib/android-launch-email.js).
 *
 * 문구를 고치면 VERSION 도 함께 올린다. DB(tb_android_waitlist.consent_version)에는
 * 버전만 저장되고, 실제로 무엇에 동의했는지는 이 파일의 git 이력으로 되짚는다.
 * 서버(src/constant/waitlist.ts)의 허용 버전 목록에도 같은 값을 추가해야 통과한다.
 *
 * 지금 버전은 아직 한 번도 배포되지 않았다 — 그래서 이 문구로 받은 동의 기록이
 * 아직 없고, 버전을 올리지 않고 문안을 고쳤다. 배포된 뒤부터는 반드시 새 버전을 쓸 것.
 */
export const ANDROID_WAITLIST_CONSENT_VERSION = "2026-08-03";

/** 체크박스 옆 문장. 동의의 대상이 무엇인지 한 줄로 말한다. */
export const ANDROID_WAITLIST_CONSENT_LABEL =
  "Email me when DAYUS opens on Android.";

/** 수집 항목 · 발송 범위 · 보관기간 · 철회 방법. 체크박스 아래 항상 보이게 둔다. */
export const ANDROID_WAITLIST_CONSENT_DETAIL =
  "That means a short confirmation now, one announcement the day it launches, and one reminder if you don't open it — nothing else, ever. We keep your address until three months after Android launches and then delete it, or after 12 months if Android hasn't launched by then. We never share it, every email carries a one-click unsubscribe, and you can have it removed any time at support@dayus.co. DAYUS on iPhone works either way.";
