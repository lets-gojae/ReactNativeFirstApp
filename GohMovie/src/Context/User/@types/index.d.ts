interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  appLogin: (email: string, password: string) => void;
  result: string | undefined;
  signInWithKakao: () => void;
  // getUserInfo: () => void;
  logout: () => void;
}
