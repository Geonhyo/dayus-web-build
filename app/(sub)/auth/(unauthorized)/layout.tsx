"use client";

import LoadingView from "@/component/common/view/LoadingView";
import { AUTH_STATUS } from "@/constant/auth-status";
import { useAuthStore } from "@/zustand/use-auth-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");
  const router = useRouter();
  const { auth } = useAuthStore();

  useEffect(() => {
    if (auth.status === AUTH_STATUS.LOADING) {
      return;
    }

    if (auth.status === AUTH_STATUS.AUTHORIZED) {
      router.replace(redirectPath || "/");
    }
  }, [auth.status]);

  if (auth.status !== AUTH_STATUS.UNAUTHORIZED) {
    return <LoadingView />;
  }

  return <>{children}</>;
}
