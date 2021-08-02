interface IUserInfo {
  password: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  initials: any;
  naverToken: string | undefined;
  kakaoToken: string | undefined;
  naverLogin: any;
  signInWidthKakao: () => void;
  logout: () => void;
}
