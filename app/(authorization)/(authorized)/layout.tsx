"use client";

import LoadingView from "@/component/common/view/LoadingView";
import { AUTH_STATUS } from "@/constant/auth-status";
import DayusImage from "@/public/images/dayus.svg";
import { useAuthStore } from "@/zustand/use-auth-store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { auth, logout } = useAuthStore();

  const redirectUrl = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname || "/";
  }, [pathname, searchParams]);

  useEffect(() => {
    if (auth.status === AUTH_STATUS.LOADING) {
      return;
    }

    if (auth.status === AUTH_STATUS.UNAUTHORIZED) {
      router.replace(`/auth?redirect=${encodeURIComponent(redirectUrl)}`);
    }
  }, [auth.status]);

  if (auth.status !== AUTH_STATUS.AUTHORIZED) {
    return <LoadingView />;
  }

  return (
    <div className="w-screen h-screen flex flex-col items-stretch">
      <header className="py-4 px-6 flex items-center bg-dark text-white font-semibold text-lg">
        <DayusImage
          className="
          w-[84px] h-[20px]
          fill-dark
        "
          alt="DAYUS"
        />
        <div className="flex-1" />
        <button
          className="text-sm opacity-70 hover:opacity-100 transition cursor-pointer"
          onClick={logout}
        >
          로그아웃
        </button>
      </header>
      {children}
    </div>
  );
}
