const REST_API_KEY = process.env.REACT_APP_API_KEY;
export const REDIRECT_URI = "https://wantedclone.com/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
