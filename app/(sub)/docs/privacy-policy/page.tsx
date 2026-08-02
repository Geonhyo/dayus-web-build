import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DAYUS",
  description: "Privacy Policy for the DAYUS mobile application.",
  alternates: {
    canonical: "/docs/privacy-policy",
    languages: {
      en: "/docs/privacy-policy",
      ko: "/kr/docs/privacy-policy",
      "x-default": "/docs/privacy-policy",
    },
  },
};

export default function Page() {
  return (
    <main lang="en" className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

      <section className="space-y-6 text-white-70">
        <p>
          MoreThanDay (the &quot;Company&quot;, &quot;we&quot;) operates the
          &quot;DAYUS&quot; mobile application (the &quot;Service&quot;). This
          Privacy Policy explains what personal information we collect, why we
          collect it, who we share it with, how long we keep it, and the choices
          you have. We handle personal information in accordance with the
          Personal Information Protection Act of the Republic of Korea and other
          applicable data protection laws.
        </p>
        <h2 className="text-xl font-semibold mt-8">
          Article 1 (Information We Collect)
        </h2>
        <p>We collect the following categories of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Account information</strong> — the
            account identifier and email address provided by your social login
            provider (Sign in with Apple or Google Sign-In), nickname, date of
            birth, gender, profile image, language and region settings, and your
            invite code.
          </li>
          <li>
            <strong className="text-white">Content you create</strong> — the
            photos and text you post in your diary, and the couple information
            you set up together (relationship start date, couple name, daily
            notification time, and time zone).
          </li>
          <li>
            <strong className="text-white">Device and session information</strong>{" "}
            — device identifier, device name, operating system version, app
            build number, and the push notification token issued to your device.
          </li>
          <li>
            <strong className="text-white">Usage and diagnostic information</strong>{" "}
            — in-app activity events, crash reports, and performance data, used
            to measure and improve how the Service is working.
          </li>
          <li>
            <strong className="text-white">Notification preferences</strong> —
            your consent settings for service, reminder, notice, update, and
            marketing notifications.
          </li>
        </ul>
        <p>
          We ask for access to your camera and photo library only so that you
          can add photos to your diary and save images to your device. Photos
          are uploaded only when you choose to post them. We do not collect
          location data.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 2 (How We Use Information)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            To create and authenticate your account, connect you with your
            partner, and operate the core features of the Service.
          </li>
          <li>
            To confirm that you meet the minimum age requirement for the
            Service.
          </li>
          <li>
            To store and deliver the photos and messages you exchange with your
            partner.
          </li>
          <li>
            To send push notifications you have enabled, such as daily reminders
            and notices about the Service.
          </li>
          <li>
            To prevent fraudulent or abusive use, handle inquiries, and resolve
            disputes.
          </li>
          <li>
            To analyze usage, diagnose crashes, and improve the stability and
            quality of the Service.
          </li>
          <li>
            To send marketing or promotional notifications, only where you have
            separately consented. You may withdraw this consent at any time in
            the app&apos;s notification settings.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          Article 3 (Sharing with Your Partner)
        </h2>
        <p>
          DAYUS is a service for two connected users. Once you are connected
          with a partner, the content you post — including photos, text, and
          your profile information such as nickname and profile image — becomes
          visible to that partner. This sharing is the intended purpose of the
          Service and is not treated as provision to an unrelated third party.
          If the connection between you and your partner ends, content that was
          already shared may remain visible to your former partner unless it is
          deleted.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 4 (Service Providers)
        </h2>
        <p>
          We do not sell personal information or provide it to third parties for
          their own marketing. We do rely on the following service providers to
          operate the Service, and they process personal information only on our
          instructions and only to the extent necessary:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Google (Firebase)</strong> — push
            notification delivery, crash reporting, performance monitoring, and
            usage analytics.
          </li>
          <li>
            <strong className="text-white">
              Amazon Web Services / Cloudflare
            </strong>{" "}
            — object storage for the photos and images you upload.
          </li>
          <li>
            <strong className="text-white">Fly.io</strong> — application server
            hosting.
          </li>
          <li>
            <strong className="text-white">Supabase</strong> — database hosting
            for account data and usage event data.
          </li>
          <li>
            <strong className="text-white">ChottuLink</strong> — generating and
            resolving partner invitation links.
          </li>
        </ul>
        <p>
          We may also disclose information where required to do so by law or by
          a lawful request from a public authority.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 5 (International Transfer)
        </h2>
        <p>
          The Company is based in the Republic of Korea, and the providers above
          operate globally. Your information — including account data, uploaded
          photos, and usage events — is stored and processed on servers located
          in the United States and in other regions operated by those providers.
          By using the Service, you understand that your information will be
          transferred outside your country of residence, and we take steps to
          ensure it remains protected in accordance with this Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 6 (Retention and Deletion)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We retain your personal information for as long as your account is
            active.
          </li>
          <li>
            When you request account deletion, your account enters a 30-day
            grace period during which it can be restored. After that period, the
            account is permanently deleted and identifiers such as your account
            ID and email address are irreversibly masked or erased.
          </li>
          <li>
            Photos and diary content are deleted together with the account at
            the end of the grace period, except where a copy remains associated
            with your partner&apos;s account.
          </li>
          <li>
            Usage and diagnostic events are retained in de-identified or
            aggregated form for statistical analysis.
          </li>
          <li>
            Where a law requires us to retain certain records, we retain them
            for the period that law prescribes and then destroy them.
          </li>
        </ul>
        <p>
          Electronic files are destroyed using technical methods that make
          recovery impossible, and any paper documents are shredded or
          incinerated.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 7 (Your Rights and How to Exercise Them)
        </h2>
        <p>
          You may at any time request access to, correction of, deletion of, or
          suspension of the processing of your personal information, and you may
          withdraw consent you have previously given. Most of these actions are
          available directly in the app: you can edit your profile, change your
          notification settings, delete individual content, and delete your
          account from the settings screen. For anything else, contact us at{" "}
          <a className="underline" href="mailto:support@dayus.co">
            support@dayus.co
          </a>
          . Absent justifiable grounds to the contrary, we will act on your
          request without undue delay.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 8 (Analytics and Diagnostics)
        </h2>
        <p>
          The Service records in-app events, crash reports, and performance data
          so that we can understand how features are used and fix problems. This
          data is tied to your account and device identifiers, and is not used
          for advertising or shared with advertising networks. On iOS and
          Android you can further limit diagnostic sharing through your device
          settings.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 9 (Security Measures)
        </h2>
        <p>
          We implement technical and administrative measures to keep personal
          information secure, including an internal management plan, access
          controls, encryption of data in transit, restricted access to storage,
          and monitoring. Uploaded images are served through time-limited,
          signed URLs rather than public links.
        </p>

        <h2 className="text-xl font-semibold mt-8">Article 10 (Children)</h2>
        <p>
          The Service is not intended for children. You must be at least 14
          years old to create an account. We do not knowingly collect personal
          information from children below that age; if we learn that we have, we
          will delete the account and the associated information without delay.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Article 11 (Privacy Officer)
        </h2>
        <p>
          We have designated a Privacy Officer to handle inquiries relating to
          the protection of personal information.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Officer: Geonhyo Park</li>
          <li>
            Email:{" "}
            <a className="underline" href="mailto:support@dayus.co">
              support@dayus.co
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          Article 12 (Remedies for Infringement of Rights)
        </h2>
        <p>
          If you are not satisfied with our response, you may contact your local
          data protection authority. Users in the Republic of Korea may also
          contact:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Personal Information Infringement Report Center (privacy.kisa.or.kr
            / 118)
          </li>
          <li>
            Personal Information Dispute Mediation Committee (kopico.go.kr /
            1833-6972)
          </li>
          <li>
            Cyber Investigation Division, Supreme Prosecutors&apos; Office
            (spo.go.kr / 02-3480-3573)
          </li>
          <li>
            National Police Agency Cyber Bureau (cyberbureau.police.go.kr / 182)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          Article 13 (Changes to This Policy)
        </h2>
        <p>
          We may update this Privacy Policy to reflect changes to the Service or
          to applicable law. We will announce any change within the Service at
          least 7 days before it takes effect, and at least 30 days in advance
          where the change is significant or unfavorable to users.
        </p>
      </section>

      <p className="mt-16 text-white text-sm">
        This Privacy Policy is effective as of August 2, 2026.
      </p>
    </main>
  );
}
