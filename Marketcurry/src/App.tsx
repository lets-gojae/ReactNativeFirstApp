import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from '~/Navigation/Navigator';
import {UserContextProvider} from '~/Context/User';
import {ProductImagesProvider} from '~/Context/MainProductData';

interface Props {}

const App = ({}: Props) => {
  return (
    <ProductImagesProvider>
      <UserContextProvider>
        <StatusBar barStyle="default" />
        <Navigator />
      </UserContextProvider>
    </ProductImagesProvider>
  );
};

export default App;
