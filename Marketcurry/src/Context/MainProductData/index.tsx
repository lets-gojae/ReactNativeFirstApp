import React, {createContext, useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';

const defaultContext: IProductData = {
  imageList: [],
  productData: [],
  descriptionData: [],
  getProduct: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const ProductImagesProvider = ({children}: Props) => {
  const [imageList, setImageList] = useState<Array<string>>([]);
  const [productData, setProductData] = useState<Array<IProduct>>([]);
  const [descriptionData, setDescriptionData] = useState<Array<IDescription>>(
    [],
  );

  const getMainBanner = async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/lets-gojae/e9aab2cfe311017c03516bb990444db4/raw/84b3ce9baf7c4911465ae754406267a8b3886e01/mainBanner.json',
    );
    const data = await response.json();
    setImageList(data);
  };

  const getProduct = async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/lets-gojae/af16df23efd4c723d209326a4f21194f/raw/a374ebf079917dea4a6c3ff117e2e4ad95146205/product.json',
    );
    const data = await response.json();
    setProductData(data);
  };

  const getItemDescription = async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/lets-gojae/e12c7d524c53e331cd8a77bebb08eabd/raw/fa2928709b92008f7ff27f77d415378c5f4d332a/itemDescription.json',
    );
    const data = await response.json();
    setDescriptionData(data);
  };

  useEffect(() => {
    getItemDescription();
    getProduct();
    getMainBanner();
  }, []);

  return (
    <UserContext.Provider
      value={{
        imageList,
        productData,
        descriptionData,
        getProduct,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {ProductImagesProvider, UserContext};
