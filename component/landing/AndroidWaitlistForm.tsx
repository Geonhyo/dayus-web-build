"use client";

import {
  ANDROID_WAITLIST_CONSENT_DETAIL,
  ANDROID_WAITLIST_CONSENT_LABEL,
} from "@/constant/android-waitlist-consent";
import createAndroidWaitlistRepository from "@/repository/waitlist/create-android";
import { useState } from "react";

/** 서버가 최종 판정하지만, 왕복 없이 걸러낼 수 있는 오타는 여기서 잡는다. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "done";
type Problem = null | "email" | "request";

/**
 * 안드로이드 대기자 명단 폼.
 *
 * 이메일 수집의 근거는 개인정보처리방침이 아니라 여기서 받는 동의다. 그래서
 * 체크박스는 기본 해제 상태이고, 체크하기 전에는 제출 버튼이 아예 눌리지 않는다.
 * 무엇을 얼마나 보관하는지(CONSENT_DETAIL)도 접지 않고 항상 보여준다.
 * 문구가 바뀌면 버전이 올라가고, 동의 시점의 버전이 서버에 함께 기록된다.
 */
export default function AndroidWaitlistForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState<Problem>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 동의 전에는 버튼이 비활성이라 여기까지 오지 않는다. 엔터 제출 같은 경로까지
    // 막는 마지막 가드 — 서버도 consent 없이는 저장하지 않는다.
    if (status === "loading" || !consent) {
      return;
    }

    const trimmed = email.trim();
    if (!EMAIL_PATTERN.test(trimmed)) {
      setProblem("email");
      return;
    }

    try {
      setProblem(null);
      setStatus("loading");
      await createAndroidWaitlistRepository({ email: trimmed, consent });
      setStatus("done");
    } catch {
      setStatus("idle");
      setProblem("request");
    }
  };

  // 이미 등록된 주소도 서버가 성공으로 응답한다. 등록 여부를 알려줄 이유가 없고,
  // 방문자 입장에서 결과는 어느 쪽이든 "명단에 있다"로 같다.
  if (status === "done") {
    return (
      <div className="w-full max-w-md rounded-xl border border-white/20 bg-white/5 px-6 py-6 text-center md:text-left">
        <p className="text-lg font-semibold text-white">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white-70">
          A confirmation is on its way to your inbox. After that we&apos;ll
          write on launch day — and one reminder if you miss it. Nothing else.
          Every email has an unsubscribe link, or write to support@dayus.co and
          we&apos;ll delete your address.
        </p>
      </div>
    );
  }

  const canSubmit = consent && status !== "loading";

  return (
    <form className="w-full max-w-md" onSubmit={onSubmit} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (problem === "email") {
              setProblem(null);
            }
          }}
          placeholder="you@example.com"
          autoComplete="email"
          aria-label="Email address"
          aria-invalid={problem === "email"}
          className="
            h-12 flex-1 rounded-lg
            border border-white/25 bg-white/5 px-4
            text-base text-white placeholder:text-dark-30
            outline-none
            focus:border-white focus:bg-white/10
            transition-colors
          "
        />
        <button
          type="submit"
          disabled={!canSubmit}
          // 왜 눌리지 않는지는 바로 아래 체크박스가 설명한다. 스크린리더에도 연결해둔다.
          aria-describedby="android-waitlist-consent"
          className="
            h-12 shrink-0 rounded-lg
            bg-white px-6
            text-sm font-semibold text-dark
            hover:bg-white-70
            disabled:cursor-not-allowed disabled:opacity-50
            transition-colors
          "
        >
          {status === "loading" ? "Sending…" : "Notify me"}
        </button>
      </div>

      {/* 동의 — 기본 해제. 체크하기 전에는 위 버튼이 눌리지 않는다. */}
      <label
        id="android-waitlist-consent"
        className="mt-5 flex cursor-pointer items-start gap-3 text-left"
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-white"
        />
        <span className="text-sm leading-relaxed text-white-70">
          {ANDROID_WAITLIST_CONSENT_LABEL}
        </span>
      </label>

      <p className="mt-3 text-left text-xs leading-relaxed text-dark-30">
        {ANDROID_WAITLIST_CONSENT_DETAIL}
      </p>

      {problem && (
        <p className="mt-3 text-left text-sm text-red-400" role="alert">
          {problem === "email"
            ? "That email address doesn't look right — mind checking it?"
            : "That didn't go through. Try again in a moment, or email us at support@dayus.co."}
        </p>
      )}
    </form>
  );
}
