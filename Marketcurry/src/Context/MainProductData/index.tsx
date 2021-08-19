import React, {createContext, useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';

const defaultContext: IProductData = {
  imageList: [],
  productData: [],
  getProduct: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const ProductImagesProvider = ({children}: Props) => {
  const [imageList, setImageList] = useState<Array<string>>([]);
  const [productData, setProductData] = useState<Array<IProduct>>([]);

  const getMainBanner = async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/lets-gojae/e9aab2cfe311017c03516bb990444db4/raw/84b3ce9baf7c4911465ae754406267a8b3886e01/mainBanner.json',
    );
    const data = await response.json();
    setImageList(data);
  };

  const getProduct = async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/lets-gojae/af16df23efd4c723d209326a4f21194f/raw/1367670192f34e861b58016cbe0c97fc3d2b769e/product.json',
    );
    const data = await response.json();
    setProductData(data);
  };

  useEffect(() => {
    console.log(productData);
    getProduct();
    getMainBanner();
  }, []);

  return (
    <UserContext.Provider value={{imageList, productData, getProduct}}>
      {children}
    </UserContext.Provider>
  );
};

export {ProductImagesProvider, UserContext};
