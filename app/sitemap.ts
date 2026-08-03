import type { MetadataRoute } from "next";

const BASE_URL = "https://dayus.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/download`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // 출시 전까지는 실제 내용이 있는 페이지(안드로이드 알림 신청)라 색인 대상이다.
    // 스토어 링크로 되돌리는 순간 이 항목도 함께 지울 것 — 리다이렉트는 색인하지 않는다.
    {
      url: `${BASE_URL}/download/android`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/terms-of-service`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/docs/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/kr/docs/terms-of-service`,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/kr/docs/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
