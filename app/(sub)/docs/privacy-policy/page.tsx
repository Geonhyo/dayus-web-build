export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-white">개인정보처리방침</h1>

      <section className="space-y-6 text-white-70">
        <p>
          MoreThanDay(이하 “회사”)는 개인정보보호법 및 정보통신망 이용촉진 및
          정보보호 등에 관한 법률에 따라 회사가 운영하는 모바일 애플리케이션
          “DayUs”(이하 “서비스”) 이용자의 개인정보와 권익을 보호하고 개인정보와
          관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은
          처리방침을 두고 있습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제1조 (개인정보의 수집 및 이용목적)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            본인확인, 서비스 부정 이용 방지, 고충처리, 분쟁 해결을 위해
            개인정보를 처리합니다.
          </li>
          <li>맞춤형 서비스 제공 및 본인 인증을 위해 개인정보를 처리합니다.</li>
          <li>
            신규 서비스 안내, 접속 빈도 분석, 서비스 이용 통계 산출을 위해
            개인정보를 처리합니다.
          </li>
          <li>광고 제공 및 광고 성과 측정을 위해 개인정보를 처리합니다.</li>
        </ul>
        <p className="mt-4">
          회사가 수집·이용하는 개인정보 항목은 다음과 같습니다:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>카카오 소셜 로그인 정보 (인증 토큰)</li>
          <li>기기정보</li>
          <li>생년월일</li>
          <li>성별</li>
          <li>닉네임</li>
          <li>광고 식별자 (ADID, IDFA 등)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          제2조 (광고 및 제3자 제공)
        </h2>
        <p>
          회사는 서비스 운영을 위해 Google AdMob 등 외부 광고 플랫폼을 이용할 수
          있으며, 이 과정에서 광고 네트워크가 이용자의 디바이스 식별자, 쿠키,
          위치정보(선택적) 등을 자동으로 수집할 수 있습니다. 수집된 정보는
          개인을 직접 식별할 수 없는 범위에서 광고 제공, 맞춤형 광고 노출, 광고
          성과 분석 등에 활용됩니다.
        </p>
        <p>
          광고 네트워크가 수집·처리하는 개인정보 범위와 이용 목적은 각 광고
          제공업체의 개인정보처리방침을 따르며, 이용자는 단말기 설정을 통해
          맞춤형 광고 노출을 제한할 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제3조 (개인정보의 보유 및 이용기간)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            보유 및 이용기간: 회원 탈퇴 또는 개인정보 수집·이용 동의 철회 시까지
          </li>
          <li>
            단, 법률에 의해 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간
            동안 보관합니다.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          제4조 (개인정보처리 위탁)
        </h2>
        <p>
          회사는 원칙적으로 개인정보를 외부에 위탁하지 않습니다. 다만 서비스
          제공에 필요한 경우, 법령에 따라 적법하게 위탁할 수 있으며, 변경 시
          이를 공지합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제5조 (정보주체의 권리와 행사방법)
        </h2>
        <p>
          이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를
          요청할 수 있습니다. 회사는 정당한 사유가 없는 한 지체 없이 필요한
          조치를 취합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제6조 (개인정보 자동 수집 장치)
        </h2>
        <p>
          회사는 맞춤형 서비스 및 광고 제공을 위해 쿠키(cookie), 광고 식별자
          등을 수집할 수 있습니다. 이용자는 디바이스 또는 브라우저 설정을 통해
          쿠키 저장을 거부할 수 있으며, 이 경우 일부 서비스 이용이 제한될 수
          있습니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">제7조 (개인정보 파기)</h2>
        <p>
          회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 불필요하게 된 경우
          지체 없이 해당 개인정보를 파기합니다. 전자적 파일은 복구할 수 없는
          기술적 방법을 이용하고, 종이 문서는 분쇄하거나 소각합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">제8조 (안전성 확보 조치)</h2>
        <p>
          회사는 개인정보보호법 제29조에 따라 개인정보를 안전하게 관리하기 위해
          내부관리계획 수립, 접근권한 통제, 암호화, 보안 프로그램 설치 등
          기술적·관리적 조치를 시행합니다.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          제9조 (개인정보 보호책임자)
        </h2>
        <p>
          회사는 개인정보 보호와 관련한 이용자 문의 처리를 위해 개인정보
          보호책임자를 지정하고 있습니다.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>담당자: 박건효</li>
          <li>이메일: support@dayus.co</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          제10조 (권익침해 구제방법)
        </h2>
        <p>
          이용자는 개인정보 침해에 대한 상담이나 피해구제를 위해 아래 기관에
          문의할 수 있습니다:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>개인정보침해신고센터 (privacy.kisa.or.kr / 118)</li>
          <li>개인정보분쟁조정위원회 (kopico.go.kr / 1833-6972)</li>
          <li>대검찰청 사이버수사과 (spo.go.kr / 02-3480-3573)</li>
          <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 182)</li>
        </ul>
      </section>

      <p className="mt-16 text-white text-sm">
        본 개인정보처리방침은 2025년 9월 10일부터 적용됩니다.
      </p>
    </main>
  );
}
