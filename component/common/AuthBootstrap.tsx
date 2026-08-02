"use client";

import { AUTH_STATUS } from "@/constant/auth-status";
import { useAuthStore } from "@/zustand/use-auth-store";
import { useEffect, useRef } from "react";

/**
 * 화면을 그리지 않고 세션 재발급만 트리거한다.
 *
 * 공개 페이지는 인증 결과를 기다릴 이유가 없다. 인증 게이트로 감싸면 페이지 전체가
 * 클라이언트 렌더링이 되어 크롤러가 본문을 못 읽으므로, 부수효과만 이 컴포넌트로 떼어낸다.
 */
export default function AuthBootstrap() {
  const { auth, reissue } = useAuthStore();
  const reissueRef = useRef(reissue);

  useEffect(() => {
    if (auth.status === AUTH_STATUS.LOADING) {
      reissueRef.current();
    }
  }, [auth.status]);

  return null;
}
