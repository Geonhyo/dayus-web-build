"use client";

import BrandSymbolImage from "@/public/images/brand/symbol/default.svg";

export default function LoadingView() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <BrandSymbolImage className="w-16 h-16 fill-dark mb-4" />
      <p className="text-sm text-dark-40">로딩 중이에요..</p>
    </div>
  );
}
