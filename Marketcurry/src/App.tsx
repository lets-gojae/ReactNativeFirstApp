import React from 'react';
import {StatusBar, LogBox} from 'react-native';

import Navigator from '~/Navigation/Navigator';
import {UserContextProvider} from '~/Context/User';
import {ProductImagesProvider} from '~/Context/MainProductData';
import {StoreProvider} from '~/Context/Reducer';

interface Props {}

const App = ({}: Props) => {
  LogBox.ignoreLogs(['Remote debugger']);

  return (
    <ProductImagesProvider>
      <UserContextProvider>
        <StoreProvider>
          <StatusBar barStyle="default" />
          <Navigator />
        </StoreProvider>
      </UserContextProvider>
    </ProductImagesProvider>
  );
};

export default App;
