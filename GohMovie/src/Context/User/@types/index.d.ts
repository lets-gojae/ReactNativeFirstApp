interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  result: string | undefined;
  appLogin: (email: string, password: string) => void;
  signInWithKakao: () => void;
  // getUserInfo: () => void;
  signOut: () => void;
}
