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
  title: "DayUs | 하루 한 장으로 가까워지는 우리",
  description:
    "DayUs는 연인들을 위한 하루 한 장 사진 공유 앱입니다. 매일 하나의 순간을 기록하고, 동시에 공개하며 우리의 이야기를 쌓아가세요.",
  keywords:
    "DayUs, 데이어스, 커플 앱, 커플 사진 공유, 하루 한 장, 연인 다이어리, 커플 다이어리, 사진 일기, 연애 기록, 추억 저장, 커플 라이프, 커플 추천 앱",
  authors: [{ name: "MoreThanDay", url: "https://dayus.co" }],
  creator: "MoreThanDay",
  publisher: "MoreThanDay",
  openGraph: {
    title: "DayUs | 하루 한 장으로 가까워지는 우리",
    description:
      "연인들을 위한 하루 한 장 사진 공유 앱, DayUs. 소중한 순간을 기록하고, 함께 더 가까워지세요.",
    url: "https://dayus.co",
    siteName: "DayUs",
    images: [
      {
        url: "https://dayus.co/images/og.webp",
        width: 1200,
        height: 630,
        alt: "DayUs | 하루 한 장으로 가까워지는 우리",
        type: "image/webp",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DayUs | 하루 한 장으로 가까워지는 우리",
    description:
      "DayUs는 하루 한 장으로 연인들의 추억을 쌓는 특별한 사진 공유 앱입니다.",
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
    <html lang="en">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
