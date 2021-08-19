import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';
import {Mixin} from '~/styles/Mixin';

import Product from './Product';

interface Props {
  title: string;
}

const CheapPrice = ({title}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <ProductWrap>
        <HeaderText>{title}</HeaderText>
        <FlatList
          data={productData.filter(item => item.cheapPrice === true)}
          keyExtractor={(item, index) => {
            return `cheapPrice-${index}`;
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
      </ProductWrap>
    </Container>
  );
};

export default CheapPrice;

const Container = Styled.View`  
  flex: 1;
`;

const ProductWrap = Styled.View`
  margin: 24px 0 24px 16px;
`;

const HeaderText = Styled.Text`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;
