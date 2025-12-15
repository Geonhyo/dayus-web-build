import { permanentRedirect } from "next/navigation";

export default function Page() {
  const iosStoreUrl = process.env.NEXT_PUBLIC_IOS_STORE_URL as string;
  return permanentRedirect(iosStoreUrl);
}
