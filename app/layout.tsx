import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  weight: "100 900",
  display: "swap",
  style: "normal",
  variable: "--font-pretendard",
});

const TITLE = "DAYUS | One photo a day, together, even apart";
const DESCRIPTION =
  "A private ritual for two. Share one photo from your day to unlock theirs — no likes, no filters, no followers.";

/**
 * 공유 미리보기 이미지.
 *
 * 대부분의 스크래퍼(Facebook, LinkedIn, Slack, Discord, X)는 1.91:1 을 기본으로 삼고
 * 첫 번째 og:image 를 고르므로 wide 를 먼저 둔다. square 는 정사각을 선호하는
 * 클라이언트(iMessage 등)를 위한 대안으로 뒤에 붙인다.
 */
const OG_WIDE = {
  url: "https://dayus.co/images/og-wide.png",
  width: 1200,
  height: 630,
  alt: TITLE,
  type: "image/png",
};

const OG_SQUARE = {
  url: "https://dayus.co/images/og-square.png",
  width: 1200,
  height: 1200,
  alt: TITLE,
  type: "image/png",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "DAYUS, couple app, long distance relationship, LDR app, photo sharing for couples, one photo a day, private photo sharing, couple widget, daily photo, relationship app",
  authors: [{ name: "MoreThanDay", url: "https://morethanday.com" }],
  creator: "MoreThanDay",
  publisher: "MoreThanDay",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://dayus.co",
    siteName: "DAYUS",
    images: [OG_WIDE, OG_SQUARE],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_WIDE.url],
    creator: "@dayus.co",
  },
  metadataBase: new URL("https://dayus.co"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
