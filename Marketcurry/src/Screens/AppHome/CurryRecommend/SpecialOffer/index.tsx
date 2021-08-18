import React from 'react';
import Styled from 'styled-components/native';

interface Props {}

const SpecialOffer = ({}: Props) => {
  return (
    <Container>
      <HeaderText>특가/혜택</HeaderText>
      <ProductContainer></ProductContainer>
    </Container>
  );
};

export default SpecialOffer;

const Container = Styled.SafeAreaView`
  height: 400px;
  
  background-color: #ededed;
`;

const HeaderText = Styled.Text`
  margin: 32px 16px 24px 16px;
  font-size: 20px;
  font-weight: bold;
`;

const ProductContainer = Styled.View`

`;
