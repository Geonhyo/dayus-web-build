import AndroidWaitlistForm from "@/component/landing/AndroidWaitlistForm";
import PhoneScreen from "@/component/landing/PhoneScreen";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DAYUS for Android | Coming soon",
  description:
    "DAYUS is on iPhone today and Android is on the way. Leave your email and we'll let you know the day it opens.",
  alternates: { canonical: "/download/android" },
};

/**
 * 안드로이드 대기자 명단.
 *
 * 예전에는 이 경로가 플레이스토어(NEXT_PUBLIC_AOS_STORE_URL)로 리다이렉트했지만,
 * 앱이 아직 스토어에 올라가 있지 않아 죽은 링크였다. 스토어에 올라갈 때까지는
 * 튕겨보내는 대신 이메일을 받아둔다. 출시되면 이 파일을 리다이렉트로 되돌리면 된다.
 *
 * 안드로이드 UA 로 /download 에 들어온 방문자는 middleware.ts 가 여기로 보낸다.
 */
export default function Page() {
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

        <div className="flex w-full flex-col items-center md:items-start">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white-70">
            Android
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Coming soon
          </h1>

          <p className="mt-4 max-w-md text-lg leading-relaxed text-white-70">
            DAYUS is on iPhone today. Android is on the way — leave your email
            and we&apos;ll tell you the day it opens.
          </p>

          <div className="mt-8 w-full">
            <AndroidWaitlistForm />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 md:items-start">
            <Link
              className="text-sm text-white-70 underline transition hover:text-white"
              href="/download/ios"
            >
              Have an iPhone? Get DAYUS now
            </Link>
            <Link
              className="text-sm text-dark-30 underline transition hover:text-white-70"
              href="/"
            >
              Back to dayus.co
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
