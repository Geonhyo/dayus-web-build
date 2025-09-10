import { permanentRedirect } from "next/navigation";

export default function Page() {
  return permanentRedirect("/docs/terms-of-service");
}
