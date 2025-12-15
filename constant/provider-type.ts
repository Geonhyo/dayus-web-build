export const PROVIDER_TYPE = {
  KAKAO: "KAKAO",
  // APPLE: 'APPLE',
  GOOGLE: "GOOGLE",
};

export type ProviderType = (typeof PROVIDER_TYPE)[keyof typeof PROVIDER_TYPE];
