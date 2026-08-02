import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | DAYUS",
  description: "DAYUS 개인정보처리방침",
  alternates: {
    canonical: "/kr/docs/privacy-policy",
    languages: {
      en: "/docs/privacy-policy",
      ko: "/kr/docs/privacy-policy",
      "x-default": "/docs/privacy-policy",
    },
  },
};

export default function Page() {
  return (
    <main lang="ko" className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-white">개인정보처리방침</h1>

      <section className="space-y-6 text-white-70">
        <p>
          MoreThanDay(이하 &quot;회사&quot;)는 회사가 운영하는 모바일
          애플리케이션 &quot;DAYUS&quot;(이하 &quot;서비스&quot;)에서 어떤
          개인정보를 수집하고, 무엇을 위해 이용하며, 누구에게 제공하고, 얼마
          동안 보관하는지, 그리고 이용자에게 어떤 선택권이 있는지를 본
          방침으로 안내합니다. 회사는 개인정보보호법 등 관련 법령에 따라
          개인정보를 처리합니다.
        </p>
        <h2 className="text-xl font-semibold mt-8">
          제1조 (수집하는 개인정보 항목)
        </h2>
        <p>회사는 다음의 개인정보를 수집합니다.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">계정정보</strong> — 소셜 로그인
            제공자(Apple 로그인, Google 로그인)로부터 전달받는 계정 식별자 및
            이메일 주소, 닉네임, 생년월일, 성별, 프로필 이미지, 언어·지역 설정,
            초대 코드
          </li>
          <li>
            <strong className="text-white">이용자가 생성한 콘텐츠</strong> —
            다이어리에 등록한 사진과 글, 커플 연결 시 설정한 정보(사귄 날,
            커플 이름, 알림 시각, 시간대)
          </li>
          <li>
            <strong className="text-white">기기 및 세션 정보</strong> — 기기
            식별자, 기기 이름, 운영체제 버전, 앱 빌드 번호, 푸시 알림 토큰
          </li>
          <li>
            <strong className="text-white">이용 및 진단 정보</strong> — 앱 내
            행동 이벤트, 오류(크래시) 리포트, 성능 데이터
          </li>
          <li>
            <strong className="text-white">알림 수신 설정</strong> — 서비스
            알림, 리마인더, 공지, 업데이트, 마케팅 알림에 대한 동의 여부
          </li>
        </ul>
        <p>
          회사는 이용자가 다이어리에 사진을 등록하거나 이미지를 기기에 저장할 수
          있도록 카메라 및 사진 라이브러리 접근 권한을 요청합니다. 사진은
          이용자가 등록을 선택한 경우에만 업로드됩니다. 회사는 위치정보를
          수집하지 않습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제2조 (개인정보의 이용목적)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            회원가입 및 본인 인증, 상대방과의 커플 연결, 서비스 핵심 기능 제공
          </li>
          <li>서비스 이용을 위한 최소 연령(만 14세) 충족 여부 확인</li>
          <li>이용자가 상대방과 주고받는 사진·메시지의 저장 및 전달</li>
          <li>
            이용자가 설정한 푸시 알림(하루 알림, 서비스 공지 등)의 발송
          </li>
          <li>서비스 부정 이용 방지, 문의 응대, 분쟁 해결</li>
          <li>
            이용 현황 분석, 오류 진단, 서비스 안정성 및 품질 개선
          </li>
          <li>
            별도로 동의한 경우에 한한 마케팅·프로모션 알림 발송. 동의는 앱 내
            알림 설정에서 언제든지 철회할 수 있습니다.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          제3조 (상대방과의 공유)
        </h2>
        <p>
          DAYUS는 연결된 두 이용자를 위한 서비스입니다. 상대방과 연결된 이후
          이용자가 등록한 콘텐츠(사진, 글)와 닉네임·프로필 이미지 등 프로필
          정보는 연결된 상대방에게 공개됩니다. 이는 서비스 본연의 목적에 따른
          공유이며, 무관한 제3자에 대한 제공이 아닙니다. 커플 연결이 해제되더라도
          이미 공유된 콘텐츠는 삭제되지 않는 한 상대방에게 계속 보일 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제4조 (개인정보 처리업무의 위탁)
        </h2>
        <p>
          회사는 개인정보를 판매하지 않으며, 제3자의 자체 마케팅 목적으로
          제공하지 않습니다. 다만 서비스 운영을 위해 아래 수탁자에게 개인정보
          처리업무를 위탁하고 있으며, 수탁자는 회사의 지시에 따라 필요한 범위
          내에서만 개인정보를 처리합니다.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Google (Firebase)</strong> — 푸시
            알림 발송, 오류 리포트, 성능 모니터링, 이용 분석
          </li>
          <li>
            <strong className="text-white">
              Amazon Web Services / Cloudflare
            </strong>{" "}
            — 업로드된 사진·이미지의 저장
          </li>
          <li>
            <strong className="text-white">Fly.io</strong> — 애플리케이션 서버
            호스팅
          </li>
          <li>
            <strong className="text-white">Supabase</strong> — 계정 데이터 및
            이용 이벤트 데이터베이스 호스팅
          </li>
          <li>
            <strong className="text-white">ChottuLink</strong> — 상대방 초대
            링크의 생성 및 연결
          </li>
        </ul>
        <p>
          이 밖에 법령에 따른 의무 또는 관계 기관의 적법한 요청이 있는 경우
          개인정보를 제공할 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제5조 (개인정보의 국외 이전)
        </h2>
        <p>
          회사는 대한민국에 소재하며, 제4조의 수탁자들은 글로벌 인프라를
          운영합니다. 이에 따라 계정 정보, 업로드된 사진, 이용 이벤트 등은
          미국을 비롯한 수탁자 운영 지역의 서버에 저장·처리됩니다. 이용자는
          서비스를 이용함으로써 개인정보가 국외로 이전됨을 이해하며, 회사는
          이전된 정보가 본 방침에 따라 보호되도록 필요한 조치를 취합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제6조 (개인정보의 보유 및 파기)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>회사는 계정이 유지되는 동안 개인정보를 보유합니다.</li>
          <li>
            회원탈퇴를 신청하면 30일의 유예기간 동안 계정이 복구 가능한 상태로
            유지되며, 유예기간이 지나면 계정은 영구 삭제되고 계정 식별자·이메일
            주소 등은 복구할 수 없도록 마스킹 또는 삭제됩니다.
          </li>
          <li>
            사진 및 다이어리 콘텐츠는 유예기간 종료 시 계정과 함께 삭제됩니다.
            다만 상대방 계정에 귀속된 사본은 그러하지 아니합니다.
          </li>
          <li>
            이용 및 진단 이벤트는 통계 분석을 위해 비식별 또는 통계 처리된
            형태로 보관될 수 있습니다.
          </li>
          <li>
            법령에 따라 보존이 필요한 경우에는 해당 법령이 정한 기간 동안
            보관한 후 파기합니다.
          </li>
        </ul>
        <p>
          전자적 파일은 복구할 수 없는 기술적 방법을 이용하여 파기하고, 종이
          문서는 분쇄하거나 소각합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제7조 (정보주체의 권리와 행사방법)
        </h2>
        <p>
          이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를
          요청하거나 기존에 제공한 동의를 철회할 수 있습니다. 대부분의 권리는 앱
          내에서 직접 행사할 수 있으며(프로필 수정, 알림 설정 변경, 개별 콘텐츠
          삭제, 설정 화면에서의 회원탈퇴), 그 밖의 사항은{" "}
          <a className="underline" href="mailto:support@dayus.co">
            support@dayus.co
          </a>
          로 문의해 주시기 바랍니다. 회사는 정당한 사유가 없는 한 지체 없이
          필요한 조치를 취합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제8조 (이용 분석 및 오류 진단 정보의 처리)
        </h2>
        <p>
          회사는 기능 이용 현황을 파악하고 오류를 개선하기 위해 앱 내 행동
          이벤트, 크래시 리포트, 성능 데이터를 기록합니다. 해당 데이터는 계정 및
          기기 식별자와 연결되어 처리되나, 광고 목적으로 이용되거나 광고
          네트워크에 제공되지 않습니다. 이용자는 기기(iOS/Android) 설정을 통해
          진단 정보 공유를 추가로 제한할 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">제9조 (안전성 확보 조치)</h2>
        <p>
          회사는 개인정보를 안전하게 관리하기 위해 내부관리계획 수립, 접근권한
          통제, 전송구간 암호화, 저장소 접근 제한, 모니터링 등 기술적·관리적
          조치를 시행합니다. 업로드된 이미지는 공개 링크가 아닌 유효시간이
          제한된 서명 URL을 통해 제공됩니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">제10조 (아동의 개인정보)</h2>
        <p>
          본 서비스는 아동을 대상으로 하지 않으며, 계정을 생성하려면 만 14세
          이상이어야 합니다. 회사는 만 14세 미만 아동의 개인정보를 고의로
          수집하지 않으며, 수집된 사실을 알게 된 경우 해당 계정과 정보를 지체
          없이 삭제합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제11조 (개인정보 보호책임자)
        </h2>
        <p>
          회사는 개인정보 보호와 관련한 이용자 문의 처리를 위해 개인정보
          보호책임자를 지정하고 있습니다.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>담당자: 박건효</li>
          <li>
            이메일:{" "}
            <a className="underline" href="mailto:support@dayus.co">
              support@dayus.co
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          제12조 (권익침해 구제방법)
        </h2>
        <p>
          이용자는 개인정보 침해에 대한 상담이나 피해구제를 위해 아래 기관에
          문의할 수 있습니다.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>개인정보침해신고센터 (privacy.kisa.or.kr / 118)</li>
          <li>개인정보분쟁조정위원회 (kopico.go.kr / 1833-6972)</li>
          <li>대검찰청 사이버수사과 (spo.go.kr / 02-3480-3573)</li>
          <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 182)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          제13조 (개인정보처리방침의 변경)
        </h2>
        <p>
          회사는 서비스 또는 관련 법령의 변경에 따라 본 방침을 개정할 수
          있습니다. 변경 시 적용일자 7일 전부터 서비스 내에 공지하며, 이용자에게
          중대하거나 불리한 변경의 경우 30일 전에 공지합니다.
        </p>
      </section>

      <p className="mt-16 text-white text-sm">
        본 개인정보처리방침은 2026년 8월 2일부터 적용됩니다.
      </p>

      <p className="mt-4 text-sm text-white-70">
        <Link className="underline" href="/docs/privacy-policy">
          View in English
        </Link>
      </p>
    </main>
  );
}
