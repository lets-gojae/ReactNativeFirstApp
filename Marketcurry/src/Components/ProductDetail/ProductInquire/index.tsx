import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';

interface Props {
  item: IProduct;
}

const ProductInquire = ({item}: Props) => {
  return <Container></Container>;
};

export default ProductInquire;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;
