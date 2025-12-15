import DownloadIcon from "@/public/icons/download.svg";
import DayusImage from "@/public/images/dayus.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-full text-white">
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
          <div className="mb-12 flex flex-row gap-1 items-center">
            <div className="relative w-9 h-18">
              <Image src="/images/laurel-l.webp" alt="Left Laurel" fill />
            </div>
            <h2 className="font-bold text-2xl text-white">
              장기 연애 커플이 직접 만든 커플앱
            </h2>
            <div className="relative w-9 h-18">
              <Image src="/images/laurel-r.webp" alt="Right Laurel" fill />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <DayusImage
              className="md:w-[400px] w-[300px] md:h-[96px] h-[72px] fill-white"
              alt="DAYUS"
            />
            <h2 className="text-l md:text-xl font-medium leading-tight text-white-70">
              하루 한 장, 둘만의 행복 습관
            </h2>
          </div>

          <div className="mt-16">
            <Link
              className="group inline-flex items-center gap-2 bg-white px-10 py-4 rounded-xl shadow-lg hover:bg-primary transition"
              href="/download"
              prefetch={true}
            >
              <p className="font-semibold text-dark text-lg group-hover:text-white ">
                앱 다운로드
              </p>
              <DownloadIcon className="w-5 h-5 fill-dark group-hover:fill-white" />
            </Link>
          </div>
        </div>
      </section>
      {/* Feature 1 */}
      <div className="flex flex-col items-center py-16 px-6">
        <p className="text-sm text-white-70 text-center px-4 py-2 rounded-full bg-dark-70">
          둘만의 행복 습관
        </p>
        <h3 className="leading-normal mt-4 text-center">
          <span className="text-xl font-normal text-white-70">
            매일 한 장씩 서로의 하루를
          </span>
          <br />
          <strong className="text-3xl font-bold text-white">
            주고받아보세요
          </strong>
        </h3>
        <Image
          src="/images/screen-1.webp"
          alt="메인 페이지 스크린샷"
          width={300}
          height={617}
          className="mx-auto mt-8"
        />
      </div>
      {/* Feature 2 */}
      <div className="flex flex-col items-center bg-dark-70 py-16 px-6">
        <p className="text-sm text-white-70 text-center px-4 py-2 rounded-full bg-dark">
          우리의 하루를 한 눈에
        </p>
        <h3 className="leading-normal mt-4 text-center">
          <span className="text-xl font-normal text-white-70">
            서로의 사진과 이야기로
          </span>
          <br />
          <strong className="text-3xl font-bold text-white">
            하루를 함께하세요
          </strong>
        </h3>
        <Image
          src="/images/screen-2.webp"
          alt="상세 페이지 스크린샷"
          width={300}
          height={617}
          className="mx-auto mt-8"
        />
      </div>
      {/* Feature 3 */}
      <div className="flex flex-col items-center py-16 px-6">
        <p className="text-sm text-white-70 text-center px-4 py-2 rounded-full bg-dark-70">
          우리의 이야기로
        </p>
        <h3 className="leading-normal mt-4 text-center">
          <span className="text-xl font-normal text-white-70">
            서로의 하루로 이루어진 이야기를
          </span>
          <br />
          <strong className="text-3xl font-bold text-white">
            추억으로 간직하세요
          </strong>
        </h3>
        <Image
          src="/images/screen-3.webp"
          alt="추억 페이지 스크린샷"
          width={300}
          height={617}
          className="mx-auto mt-8"
        />
      </div>
      {/* Final CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-medium mb-6 text-dark">
          지금 DAYUS를 다운로드 받고 <br /> 둘만의 행복 습관을 시작해보세요
        </h2>
        <div className="flex justify-center gap-4">
          <Link
            className="border-dark border-2 text-dark hover:bg-dark hover:text-white px-6 py-3 rounded-lg font-semibold"
            href="/download/ios"
          >
            App Store
          </Link>
          <Link
            className="border-dark border-2 text-dark hover:bg-dark hover:text-white px-6 py-3 rounded-lg font-semibold"
            href="https://forms.gle/PKpJ6enBmJpBjeHh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
          </Link>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              이용약관
            </Link>
            <span className="text-dark-30">|</span>
            <Link
              className="hover:font-bold transition"
              href="/docs/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
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
