import React, {useContext} from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';

import {UserContext} from '~/Context/MainProductData';

interface Props {
  title: string;
}

const SpecialOffer = ({title}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <Wrap>
        <HeaderText>{title}</HeaderText>
        {productData
          .filter(item => item.specialOffer === true)
          .map((item, index) => (
            <ProductContainer key={index}>
              <ProductWrap>
                <ProductImg source={{uri: item.image}} />
                <TextWrap>
                  <ProductName>{item.name}</ProductName>
                  <Description>{item.description}</Description>
                </TextWrap>
              </ProductWrap>
            </ProductContainer>
          ))}
      </Wrap>
    </Container>
  );
};

export default SpecialOffer;

const Container = Styled.View`
  background-color: #f0f0f0;
`;

const Wrap = Styled.View`
  margin: 24px 0 24px 16px;
`;

const HeaderText = Styled.Text`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const ProductContainer = Styled.View`
  ${Mixin.flexSet('flex-end', 'flex-start', 'column')};
`;

const ProductWrap = Styled.View`
  ${Mixin.flexSet('flex-end', 'flex-start', 'row')};
`;

const ProductImg = Styled.Image`
  width: 120px;
  height: 120px;
`;

const TextWrap = Styled.View`
  height: 120px;
  margin-left: 24px;
  ${Mixin.flexSet('center', 'flex-start', 'column')};
`;

const ProductName = Styled.Text`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
`;

const Description = Styled.Text`
  font-size: 16px;
  color: #949494;
`;
