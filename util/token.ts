let getAccessTokenRef: (() => string | null) | null = null;
let setAccessTokenRef: ((token: string | null) => void) | null = null;

export const initializeAccessTokenRef = (
  getAccessTokenFn: () => string | null,
  setAccessTokenFn: (token: string | null) => void
) => {
  getAccessTokenRef = getAccessTokenFn;
  setAccessTokenRef = setAccessTokenFn;
};

/**
 * Authorization 토큰 가져오기
 */
export const getAuthorization = async (): Promise<string | null> => {
  if (getAccessTokenRef) {
    return getAccessTokenRef();
  }
  return null;
};

/**
 * 토큰 저장
 */
export const saveAuthorization = async (token: string) => {
  if (setAccessTokenRef) {
    setAccessTokenRef(token);
  }
};
