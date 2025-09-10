import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  // iOS / Android User-Agent 판별
  const ua = typeof window === "undefined" ? "" : navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  // const isAndroid = /Android/i.test(ua); // 안드로이드 출시 후 적용

  const iosDownloadUrl = "/download/ios";
  // const aosDownloadUrl = "/download/android"; // 안드로이드 출시 후 적용

  if (typeof window !== "undefined") {
    if (isIOS) {
      redirect(iosDownloadUrl);
    }
  }

  // Web / 기타 환경
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark text-white">
      {/* 미리보기 이미지 */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-12">
        <Image
          src="/images/preview.webp"
          alt="DayUs Preview"
          fill
          className="rounded-2xl shadow-xl object-cover"
          priority
        />
      </div>

      {/* 타이틀 */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        DayUs 앱 다운로드
      </h1>
      <p className="text-white-70 max-w-md mb-10 leading-relaxed">
        하루 한 장으로 가까워지는 우리. <br />
        지금 <span className="text-white font-bold">App Store</span>에서 DayUs를
        만나보세요.
      </p>

      {/* 버튼 */}
      <div className="flex gap-4 mb-10">
        <Link
          href={iosDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary/90 transition"
        >
          App Store에서 다운로드
        </Link>
      </div>

      {/* 안내문구 */}
      <p className="text-sm text-white/60 max-w-md leading-relaxed">
        안드로이드에서는 아직 출시되지 않았습니다. <br />
        추후 안드로이드 사용을 원하시는 경우
        <br />
        <a
          href="mailto:support@dayus.com"
          className="underline hover:text-primary transition"
        >
          support@dayus.com
        </a>{" "}
        으로 연락처를 남겨주세요.
      </p>
    </main>
  );
}
