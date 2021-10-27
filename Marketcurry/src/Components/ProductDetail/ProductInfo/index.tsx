import React from 'react';
import {Image, Dimensions} from 'react-native';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

interface Props {
  item: IProduct;
}

const ProductInfo = ({item}: Props) => {
  // const {item} = route.params;
  return (
    <ItemContainer>
      <Image style={{height: 570}} source={{uri: item.image}} />
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <Description>{item.description}</Description>
        <PriceWrap>
          <Price>
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Price>
          <KRW> 원</KRW>
        </PriceWrap>
        <DCWrap>
          <WelecomeDC>웰컴 5% |</WelecomeDC>
          <PerPiece> 개당</PerPiece>
          <Accumulate> 695원 적립</Accumulate>
        </DCWrap>
        <Line />
        <InfoContainer>
          <InfoWrap>
            <InfoName>판매단위</InfoName>
            <SalesUnit>{item.salesUnit}</SalesUnit>
          </InfoWrap>
          <InfoWrap>
            <InfoName>중량/용량</InfoName>
            <Weight>{item.weight}</Weight>
          </InfoWrap>
          <InfoWrap>
            <InfoName>배송구분</InfoName>
            <ShippingCategory>{item.shippingCategory}</ShippingCategory>
          </InfoWrap>
          <InfoWrap>
            <InfoName>포장타입</InfoName>
            <PackagingType>{item.packagingType}</PackagingType>
          </InfoWrap>
          <InfoWrap>
            <InfoName>안내사항</InfoName>
            <Notification>{item.notification}</Notification>
          </InfoWrap>
        </InfoContainer>
      </ItemInfo>
    </ItemContainer>
  );
};

export default ProductInfo;

const ItemContainer = Styled.ScrollView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const ItemInfo = Styled.View`
  flex: 1;
  width: 306px;
  margin: 0 16px 0 16px;
`;

const ItemName = Styled.Text`
  margin: 8px 0 8px 0;
  font-size: 20px;
  font-weight: 500;
`;

const Description = Styled.Text`
  margin-bottom: 24px;
  font-size: 16px;
  color: gray;
`;

const UserDiscount = Styled.Text``;

const PriceWrap = Styled.Text`
  margin-bottom: 16px;
`;

const Price = Styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const KRW = Styled.Text`
  font-size: 18px;
`;

const DCWrap = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
  font-size: 18px;
`;

const WelecomeDC = Styled.Text`
  color: gray;
`;

const PerPiece = Styled.Text``;

const Accumulate = Styled.Text`
  font-weight: bold;
`;

const Line = Styled.View`
  margin: 24px 0 24px 0;
  border-bottom-width: 1px;
  border-color: #e3e3e3;
`;

const InfoContainer = Styled.View`
  flex: 1;
  padding-right: 10px;

`;

const InfoWrap = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
  margin-bottom: 16px;
  font-size: 18px;
`;
const InfoName = Styled.Text`
  margin-right: 40px;
  color: gray;
`;
const SalesUnit = Styled.Text``;
const Weight = Styled.Text``;
const ShippingCategory = Styled.Text``;
const PackagingType = Styled.Text``;
const Notification = Styled.Text`
`;
