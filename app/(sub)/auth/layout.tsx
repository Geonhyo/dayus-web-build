"use client";

import LoadingView from "@/component/common/view/LoadingView";
import { AUTH_STATUS } from "@/constant/auth-status";
import { useAuthStore } from "@/zustand/use-auth-store";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { auth, reissue } = useAuthStore();
  const reissueRef = useRef(reissue);

  useEffect(() => {
    if (auth.status === AUTH_STATUS.LOADING) {
      reissueRef.current();
      return;
    }
  }, [auth.status]);

  if (auth.status === AUTH_STATUS.LOADING) {
    return <LoadingView />;
  }

  return <>{children}</>;
}
