import { GenderType } from "@/constant/gender-type";

export interface AuthModel {
  identifier: string;
  createdAt: string;
  updatedAt: string;
  onboardedAt: string | null;
  inviteCode: string;
  info: AuthInfoModel | null;
}

export interface AuthInfoModel {
  gender: GenderType;
  username: string;
  birthday: string | null; // YYYYMMDD format
  imageKey: string | null;
}
