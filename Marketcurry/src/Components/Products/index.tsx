import React from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';

interface Props {
  name: string;
  image: string;
  price: number;
  discount: number;
  discountPrice: number;
  width?: number;
  height?: number;
  marginRight?: number;
  nameFont?: number;
  PriceFont?: number;
  DiscountFont?: number;
  DCPrice?: number;
}

const Products = ({
  name,
  image,
  price,
  discount,
  discountPrice,
  width,
  height,
  marginRight,
  nameFont,
  PriceFont,
  DiscountFont,
  DCPrice,
}: Props) => {
  return (
    <Container style={{width: width, marginRight: marginRight}}>
      <Image style={{height: height}} source={{uri: image}} />
      <Name style={{fontSize: nameFont}} numberOfLines={2}>
        {name}
      </Name>
      <TextWrap>
        <Discount style={{fontSize: DiscountFont}}>{discount}% </Discount>
        <Price style={{fontSize: PriceFont}}>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
        </Price>
      </TextWrap>
      <DiscountPrice style={{fontSize: DCPrice}}>
        {discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
      </DiscountPrice>
    </Container>
  );
};

export default Products;

const Container = Styled.TouchableOpacity`
  margin-bottom: 16px;
`;

const Name = Styled.Text`
  margin-top: 8px;
`;

const TextWrap = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')}
  margin-top: 4px;
`;

const Price = Styled.Text`
  font-weight: bold;
`;

const Discount = Styled.Text`
  font-weight: bold;
  color: #ff3b3b;
`;

const DiscountPrice = Styled.Text`
  color: #949494;
  text-decoration-line: line-through;
`;
