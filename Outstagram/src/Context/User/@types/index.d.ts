interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  initials: any;
  kakaoToken: string | undefined;
  naverToken: string | undefined;
  appLogin: (email: string, password: string) => void;
  signInWidthKakao: () => void;
  naverLogin: any;
  // getUserInfo: () => void;
  logout: () => void;
}
