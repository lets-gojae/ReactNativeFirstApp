import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  login: (email: string, password: string) => {},
  // getUserInfo: () => {},
  // logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (email: string, password: string): void => {
    AsyncStorage.setItem('token', 'save your token').then(() => {
      setUserInfo({
        name: 'Goh',
        email: 'Goh.yakuza@gmail.com',
      });
    });
    setIsLoading(true);
  };

  return (
    <UserContext.Provider value={{login, isLoading, userInfo}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider};
