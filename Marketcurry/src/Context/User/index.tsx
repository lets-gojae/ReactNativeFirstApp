import React, {createContext, useState, useEffect} from 'react';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

const iosKeys = {
  kConsumerKey: 'pRSRoF5DVRu_uorrb7Qr',
  kConsumerSecret: 'taipMQ5MiG',
  kServiceAppName: 'marketcurry',
  kServiceAppUrlScheme: 'marketcurry',
};

const initials = Platform.OS === 'ios' && iosKeys;

const defaultContext: IUserContext = {
  isLoading: false,
  initials: undefined,
  // userInfo: undefined,
  naverToken: undefined,
  kakaoToken: undefined,
  naverLogin: (props: any) => {},
  signInWidthKakao: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [kakaoToken, setKakaoToken] = useState<string>('');
  const signInWidthKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    AsyncStorage.setItem('accessToken', token.accessToken).then(() => {
      setKakaoToken(token.accessToken);
    });

    setIsLoading(true);
  };

  const [naverToken, setNaverToken] = useState<string>('');
  const naverLogin = (props: any) => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        AsyncStorage.setItem(
          'accessToken',
          JSON.stringify(token?.accessToken),
        ).then(() => {
          setNaverToken(JSON.stringify(token?.accessToken));
        });

        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };

  const logout = (): void => {
    AsyncStorage.removeItem('accessToken');
    // NaverLogin.logout();
    // setUserInfo(undefined);
    setKakaoToken('');
    // setNaverToken('');
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        kakaoToken,
        naverToken,
        initials,
        naverLogin,
        signInWidthKakao,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
