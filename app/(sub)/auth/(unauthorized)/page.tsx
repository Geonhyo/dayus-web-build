"use client";

import GoogleLoginButton from "@/component/common/button/login/GoogleLoginButton";
import KakaoLoginButton from "@/component/common/button/login/KakaoLoginButton";
import { AUTH_STATUS } from "@/constant/auth-status";
import DayusImage from "@/public/images/dayus.svg";
import { useAuthStore } from "@/zustand/use-auth-store";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");
  const { auth } = useAuthStore();

  if (auth.status !== AUTH_STATUS.UNAUTHORIZED) {
    return null;
  }

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-dark px-6">
      {/* Logo */}
      <DayusImage
        className="
          w-[160px] h-[52px]
          md:w-[240px] md:h-[57px]
          fill-dark
          mb-2
          md:mb-4
        "
        alt="DAYUS"
      />

      {/* Slogan */}
      <h2
        className="
          text-base md:text-lg
          font-medium
          text-white
          text-center
          leading-snug
          mb-14
        "
      >
        하루 한 장, 둘만의 행복 습관
      </h2>

      {/* Login Buttons */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        <KakaoLoginButton redirect={redirectPath || "/"} />
        <GoogleLoginButton redirect={redirectPath || "/"} />
      </div>
    </main>
  );
}
