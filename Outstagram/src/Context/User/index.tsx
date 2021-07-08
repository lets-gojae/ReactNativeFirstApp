import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  appLogin: (email: string, password: string) => {},
  signInWidthKakao: () => {},
  // getUserInfo: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const appLogin = (email: string, password: string): void => {
    AsyncStorage.setItem('token', 'save your token').then(() => {
      setUserInfo({
        name: 'Goh',
        email: 'Goh.yakuza@gmail.com',
      });
    });
    setIsLoading(true);
  };

  const [result, setResult] = useState<string>('');

  const signInWidthKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    AsyncStorage.setItem('accessToken', token.accessToken).then(() => {
      setResult(token.accessToken);
    });

    setIsLoading(true);
  };

  const logout = (): void => {
    AsyncStorage.removeItem('accessToken');
    setUserInfo(undefined);
    setResult('');
  };

  return (
    <UserContext.Provider
      value={{appLogin, isLoading, userInfo, signInWidthKakao, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
