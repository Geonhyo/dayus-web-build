// import DownloadIcon from "@/public/icons/download.svg";
import DownloadIcon from "@/public/icons/download.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-full text-white">
      {/* Header */}
      <header className="py-4 px-6 fixed top-0 left-0 w-full z-10 bg-transparent-dark">
        <h1 className="text-3xl font-bold">DayUs</h1>
        <div className="flex" />
        <Link
          className="px-4 py-2 bg-white rounded-lg absolute right-6 top-4 font-medium text-sm text-dark hover:bg-primary/90 hover:text-white transition"
          href="/download"
        >
          다운로드
        </Link>
      </header>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight text-white drop-shadow-md">
            하루 한 장으로 <br />
            <strong className="font-extrabold text-primary">
              &quot;우리의 사랑은 <br className="md:hidden" />
              더욱 가깝게&quot;
            </strong>
          </h1>

          <div className="mt-10">
            <Link
              className="inline-flex items-center gap-2 bg-primary px-10 py-4 rounded-xl font-semibold text-white text-lg shadow-lg hover:bg-primary/90 transition"
              href="/download"
            >
              앱 다운로드
              <DownloadIcon className="w-5 h-5 fill-white" />
            </Link>
          </div>
        </div>
      </section>
      {/* Feature 1 */}
      <div className="flex flex-col items-center py-16 px-6">
        <p className="text-sm text-white text-center px-4 py-2 rounded-full bg-dark-70">
          우리 둘만의 공간에서 즐겨요!
        </p>
        <h2 className="text-3xl leading-normal font-bold mt-2 text-center">
          일상 속 순간들을
          <br />
          상대방과 주고 받아요
        </h2>
        <Image
          src="/images/screenshots/feature-1.webp"
          alt="기능 1"
          width={300}
          height={600}
          className="mx-auto mt-8"
        />
      </div>
      {/* Feature 2 */}
      <div className="flex flex-col items-center bg-dark-70 py-16 px-6">
        <p className="text-sm text-white-70 text-center px-4 py-2 rounded-full bg-dark">
          궁금해서 얼른 나도 공유할래!
        </p>
        <h2 className="text-3xl leading-normal font-bold mt-2 text-center">
          하루의 첫 순간은
          <br />
          서로 동시에 공개돼요!
        </h2>
        <Image
          src="/images/screenshots/feature-2.webp"
          alt="기능 2"
          width={300}
          height={600}
          className="mx-auto mt-8"
        />
      </div>
      {/* Feature 3 */}
      <div className="flex flex-col items-center py-16 px-6">
        <p className="text-sm text-white-70 text-center px-4 py-2 rounded-full bg-dark-70">
          그냥 사라지는 순간들이 아니에요!
        </p>
        <h2 className="text-3xl leading-normal font-bold mt-2 text-center">
          서로의 순간들이 모여
          <br />
          우리의 이야기로 쌓여요
        </h2>
        <Image
          src="/images/screenshots/feature-3.webp"
          alt="기능 3"
          width={300}
          height={600}
          className="mx-auto mt-8"
        />
      </div>
      {/* Final CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-dark">
          지금 DayUs와 함께 <br /> 우리의 이야기를
          <br />
          시작해보세요
        </h2>
        <div className="flex justify-center gap-4">
          <a
            className="border-dark border-2 text-dark hover:bg-dark hover:text-white px-6 py-3 rounded-lg font-semibold"
            href="#"
          >
            App Store
          </a>
          <a
            className="border-dark border-2 text-dark hover:bg-dark hover:text-white px-6 py-3 rounded-lg font-semibold"
            href="#"
          >
            Google Play
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark text-white font-bold text-sm py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {/* 상단 링크 */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-700 pb-6 font-medium">
            <Link
              className="hover:font-bold transition"
              href="/docs/terms-of-service"
            >
              이용약관
            </Link>
            <span className="text-dark-30">|</span>
            <Link
              className="hover:font-bold transition"
              href="/docs/privacy-policy"
            >
              개인정보처리방침
            </Link>
            <span className="text-dark-30">|</span>
            <Link
              className="hover:font-bold transition"
              href="mailto:support@dayus.co"
            >
              제휴문의
            </Link>
          </div>

          {/* 비즈니스 정보 */}
          <div className="font-normal text-center text-white-70 space-y-1 leading-relaxed">
            <p className="text-2xl mb-2">MoreThanDay</p>
            <p>대표자 : 박건효 | 사업자등록번호 : 872-38-01256</p>
            <p>
              주소 : 인천광역시 연수구 하모니로 158, D동 3층 317-A315호 (송도동,
              송도 타임스페이스)
            </p>
            <p>이메일 : support@dayus.co</p>
          </div>

          {/* 저작권 */}
          <div className="text-center text-dark-30 pt-4 border-t border-gray-700">
            <p>
              Copyright © {new Date().getFullYear()} DayUs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
