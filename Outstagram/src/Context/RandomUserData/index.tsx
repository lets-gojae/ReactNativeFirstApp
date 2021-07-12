import React, {createContext, useState, useEffect} from 'react';
import {Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  cache?: boolean;
  children: JSX.Element | Array<JSX.Element>;
}

interface IRandomUserData {
  getMyFeed: (number?: number) => Array<IFeed>;
}

const RandomeUserDataContext = createContext<IRandomUserData>({
  getMyFeed: (number: number = 10) => {
    return [];
  },
});

const RandomUserDataProvider = ({cache, children}: Props) => {
  const [userList, setUserList] = useState<Array<IUserProfile>>([]);
  const [descriptionList, setDescriptionList] = useState<Array<string>>([]);
  const [imageList, setImageList] = useState<Array<string>>([]);

  const getCacheData = async (key: string) => {
    const cacheData = await AsyncStorage.getItem(key);
    if (cache === false || cacheData === null) {
      return undefined;
    }
  };

  const setCachedData = (key: string, data: Array<any>) => {
    AsyncStorage.setItem(key, JSON.stringify(data));
  };

  const setUsers = async () => {
    const cachedData = await getCacheData('UserList');
    if (cachedData) {
      setUserList(cachedData);
      return;
    }

    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/dev-yakuza/users/master/api.json',
      );
      const data = await response.json();
      setUserList(data);
      setCachedData('userList', data);
    } catch (err) {
      console.log(err);
    }
  };

  return;
};

export {RandomUserDataProvider};
