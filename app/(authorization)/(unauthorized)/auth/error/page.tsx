"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const statusCode = searchParams.get("status") || 500;
  const message = searchParams.get("message");

  const handleClickBackButton = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-6">
      <main className="w-full max-w-md text-center">
        <h1 className="text-7xl font-semibold text-white tracking-tight">
          {statusCode}
        </h1>

        <h2 className="mt-4 text-lg font-medium text-neutral-200">
          로그인 도중 문제가 발생했어요
        </h2>

        {message && (
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            {message}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={handleClickBackButton}
            className="
              h-11 rounded-lg
              border border-neutral-700
              text-sm font-medium text-neutral-200
              hover:bg-neutral-800
              transition-colors
            "
          >
            이전 페이지로
          </button>

          <Link
            href="/"
            replace
            className="
              h-11 rounded-lg
              flex items-center justify-center
              bg-white text-sm font-semibold text-neutral-900
              hover:bg-neutral-200
              transition-colors
            "
          >
            홈으로
          </Link>
        </div>
      </main>
    </div>
  );
}
