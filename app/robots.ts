import type { MetadataRoute } from "next";

const BASE_URL = "https://dayus.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 로그인 상태에 종속된 화면은 색인할 이유가 없다.
      disallow: ["/auth", "/auth/error", "/profile/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
