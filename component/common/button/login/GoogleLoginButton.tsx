"use client";

import { useAuthStore } from "@/zustand/use-auth-store";
import Image from "next/image";

type Props = {
  className?: string;
  redirect?: string;
};

export default function GoogleLoginButton({ className, redirect }: Props) {
  const { getDeviceInfo } = useAuthStore();
  const deviceInfo = getDeviceInfo();

  return (
    <a
      className={`w-full h-14 flex flex-row items-center gap-4 bg-[#ffffff] px-6 rounded-2xl`}
      href={`${process.env.NEXT_PUBLIC_API_URL}/web/auth/google?deviceName=${
        deviceInfo.deviceName
      }&osVersion=${deviceInfo.osVersion}&deviceId=${
        deviceInfo.deviceId
      }&redirect=${redirect || "/"}`}
    >
      <Image
        src={`/images/social/google.webp`}
        alt={`google icon`}
        width={24}
        height={24}
      />
      <p className={"text-base font-medium text-[#000000]"}>
        구글 계정으로 로그인
      </p>
    </a>
  );
}
