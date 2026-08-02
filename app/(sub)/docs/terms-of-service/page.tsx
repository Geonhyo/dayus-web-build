import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | DAYUS",
  description: "Terms of Service for the DAYUS mobile application.",
  alternates: {
    canonical: "/docs/terms-of-service",
    languages: {
      en: "/docs/terms-of-service",
      ko: "/kr/docs/terms-of-service",
      "x-default": "/docs/terms-of-service",
    },
  },
};

export default function Page() {
  return (
    <main lang="en" className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>

      <section className="space-y-6 text-white-70">
        <h2 className="text-xl font-semibold">Chapter 1. General Provisions</h2>

        <h3 className="text-lg font-semibold mt-6">Article 1 (Purpose)</h3>
        <p>
          These Terms govern the rights, obligations, and responsibilities
          between MoreThanDay (the &quot;Company&quot;) and users in connection
          with the use of the &quot;DAYUS&quot; mobile application (the
          &quot;Service&quot;) operated by the Company.
        </p>

        <h3 className="text-lg font-semibold mt-6">Article 2 (Definitions)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            &quot;Service&quot; means the DAYUS mobile application and all
            related services provided by the Company.
          </li>
          <li>
            &quot;User&quot; means any member or non-member who agrees to these
            Terms and uses the Service.
          </li>
          <li>
            &quot;Member&quot; means a person who has registered through social
            login (Sign in with Apple or Google Sign-In) and uses the Service.
          </li>
          <li>
            &quot;Account Information&quot; means the social login
            authentication information, device information, date of birth,
            gender, nickname, and similar information a Member provides to the
            Company in order to use the Service.
          </li>
          <li>
            &quot;Content&quot; means photos, text, and other information
            uploaded or posted by a Member while using the Service.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">
          Article 3 (Effect and Amendment of the Terms)
        </h3>
        <p>
          These Terms take effect when posted within the Service or on a linked
          page, or otherwise notified to users. The Company may amend these
          Terms to the extent that such amendment does not violate applicable
          law. Any amendment will be announced within the Service at least 7
          days before its effective date, stating the effective date and the
          reason for the amendment. If an amendment is unfavorable to users, it
          will be announced at least 30 days in advance.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 4 (Rules Outside These Terms)
        </h3>
        <p>
          Matters not stipulated in these Terms and the interpretation of these
          Terms shall be governed by applicable laws and commercial practice.
        </p>

        <h3 className="text-lg font-semibold mt-6">Article 5 (Registration)</h3>
        <p>
          A user may apply for membership through the social login process (Sign
          in with Apple or Google Sign-In), and registration is completed once
          the Company accepts the application. You must be at least 14 years old
          to register. The Company may refuse registration, or later revoke membership, where
          there are grounds such as the provision of false information, use for
          improper purposes, or infringement of the rights of others.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 6 (Withdrawal and Loss of Membership)
        </h3>
        <p>
          A Member may request withdrawal at any time, and the Company will
          process the withdrawal immediately. The Company may restrict use or
          revoke membership if a Member violates these Terms or interferes with
          the operation of the Service.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 7 (Obligations of the Company)
        </h3>
        <p>
          The Company will not engage in any act prohibited by applicable law or
          these Terms, and will use its best efforts to provide the Service
          continuously and reliably. The Company complies with applicable data
          protection laws, and publishes and adheres to its Privacy Policy.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 8 (Obligations of Members)
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Members must not infringe the rights of others or post unlawful
            Content.
          </li>
          <li>
            Members must not use the Service for purposes other than its
            intended purpose, such as commercial, business, or advertising
            purposes.
          </li>
          <li>
            Members must not engage in hacking, unauthorized modification of
            source code, reverse engineering, or similar acts.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">
          Article 9 (Use of the Service)
        </h3>
        <p>
          The Company provides Members with services such as photo sharing and
          message exchange. The Service is, in principle, provided year-round;
          however, it may be temporarily suspended for maintenance or other
          unavoidable reasons, in which case prior notice will be given.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 10 (Protection and Use of Personal Information)
        </h3>
        <p>
          The Company manages Members&apos; personal information securely in
          accordance with its{" "}
          <Link className="underline" href="/docs/privacy-policy">
            Privacy Policy
          </Link>{" "}
          and does not provide it to third parties without the user&apos;s
          consent. Users may request access to and correction of their personal
          information at any time.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 11 (Ownership of Copyright)
        </h3>
        <p>
          Copyright and intellectual property rights in Content created by the
          Company within the Service belong to the Company. Copyright in Content
          uploaded to the Service by a Member belongs to that Member; however,
          the Company may use such Content to the extent necessary for the
          operation and promotion of the Service.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 12 (Limitation of Liability)
        </h3>
        <p>
          The Company is not liable for any damage arising from a natural
          disaster, force majeure, or causes attributable to the user. The
          Company is likewise not liable for damage arising in connection with
          services provided free of charge.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Article 13 (Dispute Resolution and Jurisdiction)
        </h3>
        <p>
          In the event of a dispute between the Company and a user, the parties
          shall seek to resolve it in good faith. If no agreement is reached,
          the dispute shall be governed by the laws of the Republic of Korea,
          and the Seoul Central District Court shall have jurisdiction.
        </p>
      </section>

      <p className="mt-16 text-sm text-white">
        These Terms are effective as of September 10, 2025.
      </p>
    </main>
  );
}
