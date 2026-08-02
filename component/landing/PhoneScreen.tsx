import Image from "next/image";

/**
 * 앱 화면(휴대폰 목업) 이미지 슬롯.
 *
 * 목업 이미지가 이미 기기 테두리를 포함하므로 여기서는 모서리를 자르거나
 * 프레임을 덧씌우지 않는다. 투명 배경 PNG 를 그대로 얹는 것이 전제.
 *
 * 목업 원본 비율은 344:708. 파일은 4x(1376x2832) 로 준비하고
 * next/image 가 sizes 에 맞춰 줄인다.
 *
 * 표시 폭은 `--phone-w` CSS 변수로 정한다. 인라인 style 로 넣으면 미디어쿼리가
 * 이길 수 없어 반응형이 막히므로, 호출부에서 Tailwind 임의 속성으로 넘긴다:
 *   <PhoneScreen className="[--phone-w:180px] md:[--phone-w:272px]" ... />
 */
export const PHONE_SCREEN_SOURCE_WIDTH = 344;
export const PHONE_SCREEN_SOURCE_HEIGHT = 708;
export const PHONE_SCREEN_DEFAULT_WIDTH = 256;

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  /** `--phone-w` 를 재정의해 표시 폭을 조절할 수 있다. */
  className?: string;
  /** next/image 에 넘길 sizes. 표시 폭을 바꿨다면 함께 맞춰준다. */
  sizes?: string;
};

export default function PhoneScreen({
  src,
  alt,
  priority = false,
  className = "",
  sizes = `${PHONE_SCREEN_DEFAULT_WIDTH}px`,
}: Props) {
  return (
    <div
      className={`relative max-w-full shrink-0 ${className}`}
      style={{
        width: `var(--phone-w, ${PHONE_SCREEN_DEFAULT_WIDTH}px)`,
        aspectRatio: `${PHONE_SCREEN_SOURCE_WIDTH} / ${PHONE_SCREEN_SOURCE_HEIGHT}`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
