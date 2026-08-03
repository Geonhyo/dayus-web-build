import { NextResponse, type NextRequest } from "next/server";

/**
 * /download 로 들어온 모바일 요청을 각 스토어로 넘긴다.
 *
 * 페이지 컴포넌트에서 UA 를 보던 코드는 서버 컴포넌트라 실행될 수 없었다
 * (서버에서는 window 가 없고, 서버 컴포넌트는 브라우저에서 다시 실행되지 않는다).
 * 엣지에서 처리하면 화면 깜빡임이 없고 데스크톱용 페이지는 정적으로 남는다.
 */

/**
 * 크롤러는 리다이렉트하지 않는다.
 * Googlebot Smartphone 의 UA 에는 "Android" 가 들어 있어서, 걸러내지 않으면
 * 사이트맵에 넣어둔 /download 가 색인되지 못하고 스토어로 튕겨 나간다.
 * SNS 스크래퍼도 마찬가지로 OG 미리보기를 만들려면 페이지를 봐야 한다.
 */
const BOT =
  /bot|crawler|spider|crawling|facebookexternalhit|slackbot|twitterbot|discordbot|whatsapp|telegram|embedly|quora|pinterest|lighthouse|headlesschrome/i;

const IOS = /iPhone|iPad|iPod/i;
const ANDROID = /Android/i;

/**
 * ⏸ AUTH_GATE — 웹 로그인 일시 중단 (안드로이드 출시 후 제거).
 *
 * 헤더의 로그인 버튼만 가리면 URL 을 직접 친 사람은 그대로 들어온다.
 * 페이지 코드는 손대지 않고 여기서만 막아두면, 복구할 때 이 상수와 아래 블록,
 * matcher 의 두 항목만 지우면 된다.
 */
const AUTH_GATE_PREFIXES = ["/auth", "/profile"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    AUTH_GATE_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    )
  ) {
    return NextResponse.redirect(new URL("/", request.url), 307);
  }

  const ua = request.headers.get("user-agent") ?? "";

  let target: string | null = null;
  if (!BOT.test(ua)) {
    if (IOS.test(ua)) {
      target = "/download/ios";
    } else if (ANDROID.test(ua)) {
      target = "/download/android";
    }
  }

  if (!target) {
    // 페이지 응답의 Vary 는 Next 가 직접 관리한다. 여기서 덮어써도 되돌려진다.
    // 미들웨어는 요청마다 실행되므로 정적 HTML 이 캐시돼도 모바일은 위에서 걸러진다.
    return NextResponse.next();
  }

  // 목적지가 UA 에 종속이라 영구(308)가 아닌 임시(307) 리다이렉트를 쓰고,
  // 중간 캐시가 한 UA 의 결과를 다른 UA 에 주지 않도록 Vary 를 명시한다.
  const response = NextResponse.redirect(new URL(target, request.url), 307);
  response.headers.set("Vary", "User-Agent");
  return response;
}

export const config = {
  // "/auth/:path*", "/profile/:path*" 는 AUTH_GATE 용 — 로그인을 되살릴 때 함께 지운다.
  matcher: ["/download", "/auth/:path*", "/profile/:path*"],
};
