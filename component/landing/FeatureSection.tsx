import PhoneScreen from "@/component/landing/PhoneScreen";

type Props = {
  label: string;
  headline: string;
  body: string;
  screenSrc: string;
  screenAlt: string;
  /** true 면 데스크톱에서 화면이 왼쪽에 온다. 섹션을 번갈아 배치할 때 사용. */
  reverse?: boolean;
  /** true 면 한 단계 밝은 배경(bg-dark-70)을 쓴다. */
  alternate?: boolean;
};

export default function FeatureSection({
  label,
  headline,
  body,
  screenSrc,
  screenAlt,
  reverse = false,
  alternate = false,
}: Props) {
  return (
    <section className={alternate ? "bg-dark-70" : "bg-dark"}>
      <div
        className={`mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-24 md:gap-20 md:py-32 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-30">
            {label}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
            {headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white-70">{body}</p>
        </div>

        <PhoneScreen src={screenSrc} alt={screenAlt} />
      </div>
    </section>
  );
}
