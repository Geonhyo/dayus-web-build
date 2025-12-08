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

export const metadata: Metadata = {
  title: "DAYUS | 하루 한 장, 둘만의 행복 습관",
  description:
    "장기 연애 커플이 직접 만든 커플앱, DAYUS에서 하루 한 장씩 서로의 하루를 주고받아보세요",
  keywords:
    "DAYUS, 데이어스, 커플 앱, 커플 사진 공유, 하루 한 장, 연인 다이어리, 커플 다이어리, 사진 일기, 연애 기록, 추억 저장, 커플 라이프, 커플 추천 앱",
  authors: [{ name: "MoreThanDay", url: "https://morethanday.com" }],
  creator: "MoreThanDay",
  publisher: "MoreThanDay",
  openGraph: {
    title: "DAYUS | 하루 한 장, 둘만의 행복 습관",
    description:
      "장기 연애 커플이 직접 만든 커플앱, DAYUS에서 하루 한 장씩 서로의 하루를 주고받아보세요",
    url: "https://dayus.co",
    siteName: "DayUs",
    images: [
      {
        url: "https://dayus.co/images/og.webp",
        width: 1200,
        height: 630,
        alt: "DAYUS | 하루 한 장, 둘만의 행복 습관",
        type: "image/webp",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAYUS | 하루 한 장, 둘만의 행복 습관",
    description:
      "장기 연애 커플이 직접 만든 커플앱, DAYUS에서 하루 한 장씩 서로의 하루를 주고받아보세요",
    images: ["https://dayus.co/images/og.webp"],
    creator: "@dayus.co",
  },
  metadataBase: new URL("https://dayus.co"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
