/**
 * FAQ 는 화면과 FAQPage 구조화 데이터가 같은 소스를 써야 한다.
 * (구글은 눈에 보이지 않는 내용을 FAQPage 로 선언하는 것을 허용하지 않는다.)
 * 그래서 항목을 여기서 export 하고, 페이지에서 JSON-LD 로 재사용한다.
 */
export const FAQ_ITEMS = [
  {
    question: "What is DAYUS?",
    answer:
      "DAYUS is a private photo-sharing app for couples. You and your partner each send one photo from your day, and it becomes a small daily ritual the two of you keep together.",
  },
  {
    question: "How does the daily unlock work?",
    answer:
      "Their photo stays sealed until you send yours. Once you both have, the day opens at the same moment — so neither of you is only watching.",
  },
  {
    question: "Does DAYUS work for long-distance couples?",
    answer:
      "That is who it was built for. A widget keeps their most recent day on your home screen, so you catch the same moment even across cities and time zones.",
  },
  {
    question: "Who can see our photos?",
    answer:
      "Only the partner you are connected with. There is no public feed, no likes, no followers, and no way for anyone else to find what you share.",
  },
  {
    question: "Is DAYUS free?",
    answer:
      "DAYUS is free to download on iPhone. You only need your partner to join with your invite code.",
  },
  {
    question: "Is there an Android version?",
    answer:
      "DAYUS is on iPhone today. Android is in the works — you can leave your email from the Google Play link to hear when it opens.",
  },
  {
    question: "What happens to the days we have already shared?",
    answer:
      "They stay in your private calendar, in order, for the two of you to look back on whenever you want.",
  },
];

export default function Faq() {
  return (
    <section className="bg-dark-70 px-6 py-24 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Questions
        </h2>

        <dl className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question}>
              <dt className="text-lg font-semibold text-white">
                {item.question}
              </dt>
              <dd className="mt-3 leading-relaxed text-white-70">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
