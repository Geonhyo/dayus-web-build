import DayusImage from "@/public/images/dayus.svg";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="h-full text-white">
      {/* Header */}
      <header className="py-4 px-6 fixed top-0 left-0 w-full z-10 bg-transparent-dark flex flex-row items-center">
        <DayusImage className="w-[96px] h-[23px] fill-white" alt="DAYUS" />
        <div className="flex flex-1" />
        <Link
          className="px-4 py-2 bg-white rounded-lg font-medium text-sm text-dark hover:bg-primary/90 hover:text-white transition"
          href="/download"
          prefetch={true}
        >
          다운로드
        </Link>
      </header>
      {children}
    </main>
  );
}
