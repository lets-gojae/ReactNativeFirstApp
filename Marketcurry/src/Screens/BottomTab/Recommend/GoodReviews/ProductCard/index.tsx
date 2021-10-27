import React from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import Swiper from 'react-native-swiper';

import {review} from './ReviewData';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

interface Props {
  name: string;
  image: string;
  price: number;
  discount?: number;
  discountPrice?: number;
}

const ProductCard = ({name, image, price, discount, discountPrice}: Props) => {
  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.65,
        elevation: 2,
      }}>
      <Image style={{width: 300, height: 200}} source={{uri: image}} />
      <ProductInfo>
        <Name numberOfLines={2}>{name}</Name>
        <TextWrap>
          <Discount>{discount ? discount + '%' : null}</Discount>
          <Price>
            {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
          </Price>
          <DiscountPrice>
            {discountPrice
              ? discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                '원'
              : null}
          </DiscountPrice>
        </TextWrap>
      </ProductInfo>
      <Swiper
        // style={{height: 390}}
        loop={true}
        horizontal={false}
        autoplay={true}
        autoplayTimeout={2}
        showsButtons={false}
        showsPagination={false}>
        {review.map((i: any, index: number) => (
          <SlideContainer key={index}>
            <Review>{i.review}</Review>
            <Writer>{i.name}</Writer>
          </SlideContainer>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductCard;

const Container = Styled.View`
  width: 300px;
  height: 360px;
  margin: 24px 12px 32px 0;
  background-color: ${Theme.colors.backColor};
`;

const ProductInfo = Styled.View`
  margin: 0 16px 16px 8px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
`;

const Name = Styled.Text`
  margin-top: 8px;
`;

const TextWrap = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')}
  margin-top: 4px;
`;

const Discount = Styled.Text`
  margin-right: 4px;
  font-weight: bold;
  color: #ff3b3b;
`;

const Price = Styled.Text`
  margin-right: 4px;
  font-weight: bold;
`;

const DiscountPrice = Styled.Text`
  color: #949494;
  text-decoration-line: line-through;
`;

const SlideContainer = Styled.View`
  ${Mixin.flexSet('center', 'center', 'null')}
`;

const Review = Styled.Text``;

const Writer = Styled.Text`
  margin-top: 8px;
  color: gray;
`;
