import React, {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '~/Context/User';

import Button from '~/Components/Button';

interface Props {}

const MovieHome = ({}: Props) => {
  const {logout, result} = useContext<IUserContext>(UserContext);

  useEffect(() => {
    console.log(result);
  });

  return (
    <Button
      style={{marginBottom: 16}}
      label="로그인"
      onPress={() => {
        logout();
      }}
    />
  );
};

export default MovieHome;
