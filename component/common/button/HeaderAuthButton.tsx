"use client";
import { AUTH_STATUS } from "@/constant/auth-status";
import { useAuthStore } from "@/zustand/use-auth-store";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function HeaderAuthButton() {
  const { auth, logout } = useAuthStore();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const redirectUrl = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname || "/";
  }, [pathname, searchParams]);

  if (auth.status === AUTH_STATUS.AUTHORIZED) {
    return (
      <button
        className="text-sm text-white-70 opacity-70 hover:opacity-100 transition cursor-pointer"
        onClick={logout}
      >
        로그아웃
      </button>
    );
  }

  if (auth.status === AUTH_STATUS.UNAUTHORIZED) {
    return (
      <Link
        className="text-sm text-white opacity-100 transition cursor-pointer"
        href={`/auth?redirect=${encodeURIComponent(redirectUrl)}`}
      >
        로그인
      </Link>
    );
  }

  return (
    <button className="text-sm text-white-70 opacity-70" disabled>
      로딩중..
    </button>
  );
}
