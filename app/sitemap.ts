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
