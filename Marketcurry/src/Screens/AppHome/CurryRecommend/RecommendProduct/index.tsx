import React, {useState, useEffect, useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

import Product from './Product';

interface Props {
  title: string;
}

const RecommendProduct = ({title}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      <FlatList
        data={productData.filter(item => item.recommend === true)}
        keyExtractor={(item, index) => {
          return `recommendProduct-${index}`;
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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

const Container = Styled.View`
  width: 100%;
  height: 390px;
  margin-left: 16px;
  margin-bottom: 100px;
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
