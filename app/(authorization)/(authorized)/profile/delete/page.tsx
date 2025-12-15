"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import LoadingView from "@/component/common/view/LoadingView";
import deleteAuthRepository from "@/repository/auth/delete";
import validateErrorResponse from "@/util/validate/error-response";
import { useAuthStore } from "@/zustand/use-auth-store";

export default function Page() {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [onLoading, setOnLoading] = useState(false);

  const onSubmit = () => {
    const confirmed = window.confirm("정말 계정을 삭제하시겠습니까?");

    if (!confirmed) {
      return;
    }

    onDelete();
  };

  const onDelete = async () => {
    if (onLoading) {
      return;
    }

    try {
      setOnLoading(true);
      await deleteAuthRepository();
      await logout();
      router.replace("/auth");
    } catch (error: any) {
      if (validateErrorResponse(error)) {
        window.alert(error.message);
      }
    } finally {
      setOnLoading(false);
    }
  };

  if (onLoading) {
    return <LoadingView />;
  }

  return (
    <main className="flex-1 flex flex-col px-4 py-6 max-w-xl w-full mx-auto">
      <h1 className="text-xl font-semibold text-white mb-4">
        정말 계정을 삭제하시겠습니까?
      </h1>

      <p className="text-sm leading-relaxed text-white-70">
        계정을 삭제한 후 7일 내에는 복구가 가능하며, 동일한 사용자와 재연결을
        하여 데이터를 복구할 수 있습니다.
        <br />
        <br />
        7일 이후에는 더 이상 복구할 수 없으며, 함께 연결되었던 사용자와의
        데이터도 모두 삭제됩니다.
      </p>

      <div className="flex-1" />
      <button
        type="button"
        onClick={onSubmit}
        disabled={onLoading}
        className="
              w-full h-12 rounded-lg
              text-sm font-semibold
              text-white
              bg-red-600
              hover:bg-red-700
              active:bg-red-800
              disabled:bg-red-400
              disabled:cursor-not-allowed
              transition-colors
            "
      >
        계정 삭제
      </button>
    </main>
  );
}
