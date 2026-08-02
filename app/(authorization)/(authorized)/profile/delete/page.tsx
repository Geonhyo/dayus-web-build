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
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );

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
        Are you sure you want to delete your account?
      </h1>

      <p className="text-sm leading-relaxed text-white-70">
        For 30 days after deletion your account can still be restored, and
        reconnecting with the same partner brings your data back.
        <br />
        <br />
        After 30 days it can no longer be recovered, and everything shared with
        the partner you were connected to is deleted as well.
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
        Delete account
      </button>
    </main>
  );
}
