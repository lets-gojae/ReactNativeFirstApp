import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';

interface Props {}

const ProductReview = ({}: Props) => {
  return <Container></Container>;
};

export default ProductReview;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;
