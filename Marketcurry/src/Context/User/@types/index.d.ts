interface IUserInfo {
  password: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  loginToggle: boolean;
  initials: any;
  naverToken: string | undefined;
  kakaoToken: string | undefined;
  naverLogin: any;
  getProfile: () => void;
  signInWidthKakao: () => void;
  logout: () => void;
}
