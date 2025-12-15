export const GENDER_TYPE = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
};

export type GenderType = (typeof GENDER_TYPE)[keyof typeof GENDER_TYPE];

export const isGenderType = (value: any): value is GenderType => {
  return Object.values(GENDER_TYPE).includes(value);
};
