import Faq, { FAQ_ITEMS } from "@/component/landing/Faq";
import FeatureSection from "@/component/landing/FeatureSection";
import PhoneScreen from "@/component/landing/PhoneScreen";
import DownloadIcon from "@/public/icons/download.svg";
import DayusImage from "@/public/images/dayus.svg";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/id6752271323";

/**
 * 검색엔진과 생성형 검색이 앱의 사실관계(무엇을·어느 플랫폼·얼마)를
 * 문장 해석 없이 읽을 수 있게 한다.
 * 평점은 실제 리뷰가 쌓이기 전까지 넣지 않는다.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dayus.co/#organization",
      name: "MoreThanDay",
      url: "https://dayus.co",
      email: "support@dayus.co",
      logo: "https://dayus.co/images/og-square.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://dayus.co/#website",
      url: "https://dayus.co",
      name: "DAYUS",
      inLanguage: "en",
      publisher: { "@id": "https://dayus.co/#organization" },
    },
    {
      "@type": "MobileApplication",
      "@id": "https://dayus.co/#app",
      name: "DAYUS",
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Photo Sharing",
      operatingSystem: "iOS",
      url: "https://dayus.co",
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      inLanguage: "en",
      description:
        "DAYUS is a private photo-sharing app for couples. You and your partner each send one photo a day, and their day stays sealed until you share yours. Built for long-distance couples, with no likes, no filters and no followers.",
      publisher: { "@id": "https://dayus.co/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dayus.co/#faq",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <main className="h-full text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <section
        className="relative min-h-svh px-6 py-32"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="relative z-1 mx-auto flex min-h-[calc(100svh-16rem)] max-w-5xl flex-col items-center justify-center gap-16 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white-70">
              A private ritual for two
            </p>

            <DayusImage
              className="mx-auto mt-6 h-[58px] w-[240px] fill-white sm:h-[72px] sm:w-[300px] md:mx-0 md:h-[96px] md:w-[400px]"
              alt="DAYUS"
            />

            <h1 className="mt-10 text-4xl font-bold leading-tight text-white md:text-6xl">
              One photo a day
            </h1>
            <p className="mt-4 text-xl font-medium text-white-70 md:text-2xl">
              together, even apart
            </p>

            <div className="mt-12">
              <Link
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 shadow-lg transition hover:bg-dark"
                href="/download"
                prefetch={true}
              >
                <p className="text-lg font-semibold text-dark group-hover:text-white">
                  Download the app
                </p>
                <DownloadIcon className="h-5 w-5 fill-dark group-hover:fill-white" />
              </Link>
            </div>
          </div>

          <PhoneScreen
            src="/images/screens/today.png"
            alt="The DAYUS home screen showing today's photo"
            priority
          />
        </div>
      </section>

      {/* The rule — mutual unlock */}
      <FeatureSection
        label="The rule"
        headline="Share yours to see theirs."
        body="Their day is already waiting for you. It stays sealed until you send your own — so you both open the day at the same moment, like a letter neither of you read early."
        screenSrc="/images/screens/locked.png"
        screenAlt="A partner's entry waiting, still locked until you share yours"
      />

      {/* Share */}
      <FeatureSection
        label="Every day"
        headline="Share a moment from your day."
        body="The light at 7am. Feet on the couch. Toast that came out a little too dark. Not the highlight of the day — just what the day actually looked like."
        screenSrc="/images/screens/share.png"
        screenAlt="Composing today's photo with a short caption"
        reverse
        alternate
      />

      {/* React */}
      <FeatureSection
        label="Just the two of you"
        headline="React to their day."
        body="A word back. A small note under their photo. No audience, no performance — this is a conversation with exactly one person."
        screenSrc="/images/screens/react.png"
        screenAlt="Reacting to a partner's photo with a short reply"
      />

      {/* Widget */}
      <FeatureSection
        label="Home screen"
        headline="See their day without opening anything."
        body="Their photo sits quietly on your home screen. Different city, different time zone — you still catch the same moment."
        screenSrc="/images/screens/widget.png"
        screenAlt="The DAYUS widget on an iPhone home screen"
        reverse
        alternate
      />

      {/* Memories */}
      <FeatureSection
        label="Your private recap"
        headline="Every day becomes a memory, together."
        body="Months later it is all still here, in order — the days you built one at a time. This is what the shape of your love looks like three years from now."
        screenSrc="/images/screens/memories.png"
        screenAlt="A calendar of past days, each one a photo"
      />

      {/* Manifesto */}
      <section className="bg-dark px-6 py-28 text-center md:py-36">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            No likes. No filters.
            <br />
            No followers.
          </h2>
          <p className="mt-8 text-xl text-white-70 md:text-2xl">
            Just you and them.
          </p>
          <p className="mt-12 text-base leading-relaxed text-dark-30">
            Not a diary. Not a cloud album. Not a chat app.
            <br />
            One photo, once a day, for one person.
          </p>

          <p className="mt-12 text-sm leading-relaxed text-dark-30">
            DAYUS is a private photo-sharing app for couples, made for
            long-distance. Free on iPhone.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 text-center">
        <h2 className="text-3xl font-bold leading-tight text-dark md:text-4xl">
          Send today&apos;s photo.
        </h2>
        <p className="mt-4 text-lg text-dark-50">
          one photo a day, together, even apart
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-lg border-2 border-dark px-6 py-3 font-semibold text-dark transition hover:bg-dark hover:text-white"
            href="/download/ios"
          >
            App Store
          </Link>
          <Link
            className="rounded-lg border-2 border-dark px-6 py-3 font-semibold text-dark transition hover:bg-dark hover:text-white"
            href="/download/android"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-10 text-sm font-bold text-white">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-700 pb-6 font-medium">
            <Link
              className="transition hover:font-bold"
              href="/docs/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </Link>
            <span className="text-dark-30">|</span>
            <Link
              className="transition hover:font-bold"
              href="/docs/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <span className="text-dark-30">|</span>
            <Link
              className="transition hover:font-bold"
              href="mailto:support@dayus.co"
            >
              Contact
            </Link>
          </div>

          {/* Company */}
          <div className="space-y-1 text-center font-normal leading-relaxed text-white-70">
            <p className="mb-2 text-2xl">MoreThanDay</p>
            <p>support@dayus.co</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4 text-center text-dark-30">
            <p>
              Copyright © {new Date().getFullYear()} DAYUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
