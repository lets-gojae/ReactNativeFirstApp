import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {UserContext} from '~/Context/MainProductData';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import Products from '~/Components/Products';
import ProductCard from './ProductCard';

interface Props {
  title: string;
}

const GoodReviews = ({title}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <ProductContainer>
        <HeaderWrap>
          <HeaderText>{title}</HeaderText>
        </HeaderWrap>
        <FlatList
          data={productData.filter(item => item.cheapPrice === true)}
          keyExtractor={(item, index) => {
            return `goodReviews-${index}`;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              discount={item.discount}
              discountPrice={item.discountPrice}
            />
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default GoodReviews;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const ProductContainer = Styled.View`
  margin: 24px 16px 0 16px;
`;

const HeaderWrap = Styled.TouchableOpacity``;

const HeaderText = Styled.Text`
  /* margin-bottom: 16px; */
  font-size: 20px;
  font-weight: bold;
`;
