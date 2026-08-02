import PhoneScreen from "@/component/landing/PhoneScreen";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Download DAYUS | For Couples",
  description:
    "Get DAYUS on the App Store. One photo a day, together, even apart.",
  alternates: { canonical: "/download" },
};

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
    <main className="flex min-h-svh flex-col items-center justify-center bg-dark px-6 py-20 text-white md:py-24">
      <div className="flex w-full max-w-4xl flex-col items-center gap-14 text-center md:flex-row md:items-center md:gap-20 md:text-left">
        <PhoneScreen
          src="/images/screens/today.png"
          alt="The DAYUS home screen showing today's photo"
          className="[--phone-w:168px] sm:[--phone-w:200px] md:[--phone-w:272px]"
          sizes="(max-width: 767px) 200px, 272px"
          priority
        />

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-extrabold md:text-5xl">DAYUS</h1>
          <p className="mt-2 text-lg leading-relaxed text-white-70">
            one photo a day, together, even apart
          </p>

          <h2 className="mt-10 max-w-md text-xl font-bold text-white md:mt-12">
            Get DAYUS on the App Store or Google Play
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-dark"
              href={iosDownloadUrl}
            >
              App Store
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-dark"
              href={aosDownloadUrl}
            >
              Google Play
            </Link>
          </div>

          <Link
            className="mt-10 text-sm text-dark-30 underline transition hover:text-white-70"
            href="/"
          >
            Back to dayus.co
          </Link>
        </div>
      </div>
    </main>
  );
}
