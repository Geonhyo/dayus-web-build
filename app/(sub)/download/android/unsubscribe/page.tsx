import AndroidUnsubscribeButton from "@/component/landing/AndroidUnsubscribeButton";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unsubscribe | DAYUS",
  // 토큰이 붙은 개인용 URL 이라 색인 대상이 아니다.
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ t?: string }>;
};

/**
 * 안드로이드 대기자 명단 수신 거부 확인 페이지.
 *
 * 출시 안내 메일의 "Remove my email" 링크가 서버를 거쳐 여기로 온다.
 * 실제 삭제는 버튼(POST)에서 일어난다 — 메일 클라이언트의 링크 프리페치로
 * 본인이 누르지도 않았는데 명단에서 사라지는 일을 막기 위해서다.
 */
export default async function Page({ searchParams }: Props) {
  const { t } = await searchParams;

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-dark px-6 py-20 text-white">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold md:text-4xl">
          Stop these emails?
        </h1>

        {t ? (
          <>
            <p className="mt-4 leading-relaxed text-white-70">
              We&apos;ll delete your email address from the Android list right
              away. Nothing else is stored, so there is nothing left to keep.
            </p>
            <div className="mt-8">
              <AndroidUnsubscribeButton token={t} />
            </div>
          </>
        ) : (
          <>
            <p className="mt-4 leading-relaxed text-white-70">
              This link is missing the part that tells us which address to
              remove. Open it straight from the email, or write to
              support@dayus.co and we&apos;ll take care of it.
            </p>
            <Link
              className="mt-8 inline-block text-sm text-dark-30 underline transition hover:text-white-70"
              href="/"
            >
              Back to dayus.co
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
