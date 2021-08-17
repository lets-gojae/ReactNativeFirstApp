import React, {useState, useEffect, useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

import Product from './Product';
import MainBanner from '~/Screens/AppHome/CurryRecommend/MainBanner';
interface Props {
  title: string;
}

const RecommendProduct = ({title}: Props) => {
  const [productList, setProductList] = useState<Array<IProduct>>([]);
  const {getProduct, productData} = useContext<IProductData>(UserContext);

  useEffect(() => {
    console.log(productData);
  });

  return (
    <Container>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      <FlatList
        data={productData}
        keyExtractor={(item, index) => {
          return `recommendProduct-${index}`;
        }}
        horizontal={true}
        renderItem={({item, index}) => (
          <Product
            id={index}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        )}
      />
    </Container>
  );
};

export default RecommendProduct;

const Container = Styled.SafeAreaView`
  width: 100%;
  height: 350px;
  margin-left: 16px;
`;
const Header = Styled.View`
  ${Mixin.flexSet('flex-end', 'flex-start', 'column')};
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
`;

const HeaderText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Theme.fontColors.headerColor};
`;
