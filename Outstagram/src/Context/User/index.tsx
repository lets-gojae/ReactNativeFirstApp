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

// const iosKeys = {
//   kConsumerKey: 'DidEHA_hGKxTk0x_TKzH',
//   kConsumerSecret: 'pWswySc6qW',
//   kServiceAppName: 'Outstagram',
//   kServiceAppUrlScheme: 'outstagram', // only for iOS
// };

// const androidKeys = {
//   kConsumerKey: 'DidEHA_hGKxTk0x_TKzH',
//   kConsumerSecret: 'pWswySc6qW',
//   kServiceAppName: 'Outstagram',
// };

// const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

const defaultContext: IUserContext = {
  isLoading: false,
  // initials: undefined,
  userInfo: undefined,
  kakaoToken: undefined,
  naverToken: undefined,
  appLogin: (email: string, password: string) => {},
  signInWidthKakao: () => {},
  naverLogin: (props: any) => {},
  logout: () => {},
  // getUserInfo: () => {},
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
        console.log(`\n\n  Token is fetched  :: ${token?.accessToken} \n\n`);

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

  // useEffect(() => {
  //   AsyncStorage.getItem('accessToken').then(value => console.log(value));
  // });

  // const getUserProfile = async () => {
  //   const profileResult = await getProfile(naverToken.accessToken);
  //   if (profileResult.resultcode === "024") {
  //     Alert.alert("로그인 실패", profileResult.message);
  //     return;
  //   }
  //   console.log("profileResult", profileResult);
  // };

  const logout = (): void => {
    AsyncStorage.removeItem('accessToken');
    NaverLogin.logout();
    setUserInfo(undefined);
    setKakaoToken('');
    setNaverToken('');
  };

  return (
    <UserContext.Provider
      value={{
        appLogin,
        isLoading,
        userInfo,
        kakaoToken,
        naverToken,
        // initials,
        signInWidthKakao,
        naverLogin,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
