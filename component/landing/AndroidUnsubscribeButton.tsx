"use client";

import deleteAndroidWaitlistRepository from "@/repository/waitlist/delete-android";
import Link from "next/link";
import { useState } from "react";

type Props = {
  token: string;
};

/**
 * 수신 거부 확인 버튼.
 *
 * 메일의 링크를 누르는 것만으로 지우지 않는 이유는 서버 쪽 컨트롤러 주석 참고 —
 * 메일 클라이언트가 본문 링크를 미리 열어보기 때문이다. 실제 삭제는 이 버튼에서만 한다.
 */
export default function AndroidUnsubscribeButton({ token }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const onClick = async () => {
    if (status === "loading") {
      return;
    }

    try {
      setStatus("loading");
      await deleteAndroidWaitlistRepository({ token });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="w-full max-w-md">
        <p className="text-lg font-semibold text-white">Removed.</p>
        <p className="mt-2 text-sm leading-relaxed text-white-70">
          Your email address is gone from the list — we won&apos;t write again.
        </p>
        <Link
          className="mt-8 inline-block text-sm text-dark-30 underline transition hover:text-white-70"
          href="/"
        >
          Back to dayus.co
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <button
        type="button"
        onClick={onClick}
        disabled={status === "loading"}
        className="
          h-12 w-full rounded-lg
          bg-white px-6
          text-sm font-semibold text-dark
          hover:bg-white-70
          disabled:cursor-not-allowed disabled:opacity-60
          transition-colors
        "
      >
        {status === "loading" ? "Removing…" : "Remove my email"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          That didn&apos;t go through. Try again, or email support@dayus.co and
          we&apos;ll remove it for you.
        </p>
      )}
    </div>
  );
}
