export const AUTH_STATUS = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  AUTHORIZED: 'AUTHORIZED',
  LOADING: 'LOADING',
} as const;

export type AuthStatus = (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS];
