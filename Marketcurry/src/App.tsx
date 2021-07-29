import React from 'react';
import {StatusBar} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';

import Navigator from '~/Screens/Navigator';
// import {UserContextProvider} from '~/Context/User';
// import {RandomUserDataProvider} from '~/Context/RandomUserData';

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Navigator />
    </>
  );
};

export default App;
