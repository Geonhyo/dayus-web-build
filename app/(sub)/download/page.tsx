import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  // iOS / Android User-Agent 판별
  const ua = typeof window === "undefined" ? "" : navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  const iosDownloadUrl = "/download/ios";
  const aosDownloadUrl = "/download/android";

  if (typeof window !== "undefined") {
    if (isIOS) {
      redirect(iosDownloadUrl);
    }

    if (isAndroid) {
      redirect(aosDownloadUrl);
    }
  }

  // Web / 기타 환경
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark text-white">
      {/* 미리보기 이미지 */}
      <div className="relative w-36 h-48 md:w-48 md:h-64 mb-12">
        <Image
          src="/images/preview.webp"
          alt="미리보기 이미지"
          fill
          className="rounded-2xl shadow-xl object-cover"
          priority
        />
      </div>

      {/* 타이틀 */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-1">DAYUS</h1>
      <p className="text-white-70 max-w-md mb-10 leading-relaxed">
        하루 한 장, 둘만의 행복 습관
      </p>

      <h2 className="text-xl font-bold mb-6 text-white">
        지금 앱스토어나 구글 플레이에서
        <br />
        다운로드 받아보세요
      </h2>
      <div className="flex justify-center gap-4">
        <Link
          className="border-white border-2 text-white hover:bg-white hover:text-dark px-6 py-3 rounded-lg font-semibold"
          href="/download/ios"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store
        </Link>
        <Link
          className="border-white border-2 text-white hover:bg-white hover:dark-white px-6 py-3 rounded-lg font-semibold"
          href="/download/android"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </Link>
      </div>
    </main>
  );
}
