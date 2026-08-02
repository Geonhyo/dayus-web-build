# 랜딩 페이지 앱 화면 이미지

현재 들어있는 파일은 **임시 플레이스홀더**입니다. 실제 휴대폰 목업으로 덮어써 주세요.

## 규격

- 목업 원본 비율: **344 × 708**
- 넣을 파일 크기: **1376 × 2832** (344×708의 4배). 3x(1032 × 2124)도 가능
- 표시 크기: 폭 **256px** — 4x면 레티나에서 충분히 선명합니다
- 포맷: **`.png`** (투명 배경 권장). 파일명을 유지하면 코드 수정이 필요 없습니다
- 목업이 기기 테두리를 이미 포함하므로 코드에서 모서리를 자르거나 그림자를 덧씌우지 않습니다.
  `object-contain`으로 얹기만 하므로 여백은 이미지 자체에서 관리하세요

## 파일 목록

| 파일           | 랜딩 섹션                                  | App Store 미리보기 |
| -------------- | ------------------------------------------ | ------------------ |
| `today.png`    | Hero — "One photo a day"                   | 1번 (오늘 화면)    |
| `locked.png`   | The rule — "Share yours to see theirs."    | 5번 (잠금 상태)    |
| `share.png`    | Every day — "Share a moment from your day" | 2번 (사진 등록)    |
| `react.png`    | Just the two of you — "React to their day" | 3번 (리액션)       |
| `widget.png`   | Home screen — 위젯                         | 4번 (홈 위젯)      |
| `memories.png` | Your private recap — 캘린더                | 6번 (메모리)       |

나중에 webp로 바꿀 때는 파일 확장자와
`app/(public)/page.tsx`의 `screenSrc` 값만 함께 바꾸면 됩니다.

## 슬롯을 추가·변경하려면

`component/landing/PhoneScreen.tsx`가 규격을 한 곳에서 관리하고,
`app/(public)/page.tsx`의 `FeatureSection`에 `screenSrc`로 연결됩니다.
