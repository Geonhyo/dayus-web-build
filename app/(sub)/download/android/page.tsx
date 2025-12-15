import { redirect } from "next/navigation";

export default function Page() {
  const aosStoreUrl = process.env.NEXT_PUBLIC_AOS_STORE_URL as string; // 안드로이드 출시 후 적용
  return redirect(aosStoreUrl);
}
