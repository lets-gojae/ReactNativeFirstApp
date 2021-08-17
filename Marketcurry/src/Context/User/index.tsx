import React, {createContext, useState, useEffect} from 'react';
import {Platform} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {NavigationContainer} from '@react-navigation/native';

const iosKeys = {
  kConsumerKey: 'pRSRoF5DVRu_uorrb7Qr',
  kConsumerSecret: 'taipMQ5MiG',
  kServiceAppName: 'marketcurry',
  kServiceAppUrlScheme: 'marketcurry',
};

const initials = Platform.OS === 'ios' && iosKeys;

const defaultContext: IUserContext = {
  isLoading: false,
  loginToggle: false,
  initials: undefined,
  // userInfo: undefined,
  naverToken: undefined,
  kakaoToken: undefined,
  getProfile: () => {},
  naverLogin: (props: any) => {},
  signInWidthKakao: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'FindId'>;
interface Props {
  navigation?: NavigationProp;
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children, navigation}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginToggle, setLoginToggle] = useState<boolean>(false);

  const [kakaoToken, setKakaoToken] = useState<string>('');
  const signInWidthKakao = async (): Promise<void> => {
    try {
      const token = await login();
      AsyncStorage.setItem('accessToken', token.accessToken).then(() => {
        setKakaoToken(token.accessToken);
      });
      if (token) {
        setLoginToggle(true);
        setIsLoading(true);
        console.log(token);
        console.log(loginToggle);
        navigation?.navigate('FindId');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [getProfil, setGetProfil] = useState<string>('');
  const getProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getKakaoProfile();
    setGetProfil(JSON.stringify(profile));
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

  // useEffect(() => {
  //   console.log(KakaoOAuthToken);
  // });

  return (
    <UserContext.Provider
      value={{
        isLoading,
        loginToggle,
        kakaoToken,
        naverToken,
        initials,
        naverLogin,
        getProfile,
        signInWidthKakao,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
