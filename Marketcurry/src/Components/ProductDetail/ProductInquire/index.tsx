import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';

interface Props {}

const ProductInquire = ({}: Props) => {
  return <Container></Container>;
};

export default ProductInquire;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;
