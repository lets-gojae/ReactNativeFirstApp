import React from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  discountPrice: number;
}

const Product = ({id, name, image, price, discount, discountPrice}: Props) => {
  return (
    <Container key={id}>
      {console.log(discountPrice)}
      <Image style={{width: 180, height: 220}} source={{uri: image}} />
      <Name>{name}</Name>
      <Discounts>{discount}</Discounts>
      <Price>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
      </Price>
      <DiscountPrice>{discountPrice}</DiscountPrice>
    </Container>
  );
};

export default Product;

const Container = Styled.View`
${Mixin.flexSet('null', 'null', 'column')};
  margin-right: 8px;
`;

const Name = Styled.Text``;
const Discounts = Styled.Text``;
const Price = Styled.Text``;
const DiscountPrice = Styled.Text``;
