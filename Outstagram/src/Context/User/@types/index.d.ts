interface IUserInfo {
  password: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  initials: any;
  kakaoToken: string | undefined;
  naverToken: string | undefined;
  naverLogin: any;
  appLogin: (email: string, password: string) => void;
  signInWidthKakao: () => void;
  getUserInfo: () => void;
  logout: () => void;
}
