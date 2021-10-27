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
  signInWithKakao: () => {},
  result: 'string',
  getUserInfo: () => {},
  signOut: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const appLogin = (email: string, password: string): void => {
    //Use Email and Passsword for login API
    //Get token and UserInfo via Login API
    AsyncStorage.setItem('accessToken', 'save your token').then(() => {
      setUserInfo({
        name: 'dev-yakuza',
        email: 'dev.yakuza@gmail.com',
      });
      setIsLoading(true);
    });
  };

  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    AsyncStorage.setItem('accessToken', token.accessToken).then(() => {
      setResult(token.accessToken);
    });

    setIsLoading(true);
  };

  const signOut = async (): Promise<void> => {
    await AsyncStorage.removeItem('accessToken');
    setUserInfo(undefined);
    setResult('');
  };

  const getUserInfo = (): void => {
    AsyncStorage.getItem('accessToken')
      .then(value => {
        if (value) {
          setUserInfo({
            name: 'dev-yakuza',
            email: 'dev.yakuza@gmail.com',
          });
          setResult(value);
        }
        setIsLoading(true);
      })
      .catch(() => {
        setUserInfo(undefined);
        setIsLoading(true);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        userInfo,
        result,
        appLogin,
        signInWithKakao,
        signOut,
        getUserInfo,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
