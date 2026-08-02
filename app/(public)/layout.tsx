import AuthBootstrap from "@/component/common/AuthBootstrap";
import HeaderAuthButton from "@/component/common/button/HeaderAuthButton";
import DayusImage from "@/public/images/dayus.svg";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * 공개(마케팅) 영역 레이아웃.
 *
 * 인증 상태와 무관하게 서버에서 완전히 렌더링돼야 검색엔진과 SNS 스크래퍼가 본문을 읽는다.
 * 인증에 의존하는 조각은 AuthBootstrap 과 HeaderAuthButton 뿐이고 둘 다 클라이언트 전용이다.
 * HeaderAuthButton 은 useSearchParams 를 쓰므로 Suspense 로 감싸야 페이지가 정적으로 프리렌더된다.
 */
export default function Layout({ children }: Props) {
  return (
    <main className="h-full text-white">
      <AuthBootstrap />

      {/* Header */}
      <header className="py-4 px-6 fixed top-0 left-0 w-full z-10 bg-transparent-dark flex flex-row gap-4 items-center">
        <DayusImage className="w-[96px] h-[23px] fill-white" alt="DAYUS" />
        <div className="flex flex-1" />
        <Suspense
          fallback={
            <button className="text-sm text-white-70 opacity-70" disabled>
              Loading…
            </button>
          }
        >
          <HeaderAuthButton />
        </Suspense>
        <Link
          className="px-4 py-2 bg-white rounded-lg font-medium text-sm text-dark hover:bg-dark/90 hover:text-white transition"
          href="/download"
          prefetch={true}
        >
          Download
        </Link>
      </header>
      {children}
    </main>
  );
}
