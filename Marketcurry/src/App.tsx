import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from '~/Navigation/Navigator';
import {UserContextProvider} from '~/Context/User';
import {ProductImagesProvider} from '~/Context/MainProductData';
import {StoreProvider} from '~/Context/ReviewContext';

interface Props {}

const App = ({}: Props) => {
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
