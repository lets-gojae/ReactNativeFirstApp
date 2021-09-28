import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import CategoryList from './CategoryList';
import CategoryRecommend from './CategoryRecommend';

const Category = () => {
  return (
    <Container>
      <CategoryList />
      <Line />
      <CategoryRecommend />
    </Container>
  );
};

export default Category;

const Container = Styled.ScrollView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const Line = Styled.View`
  border-bottom-width: 16px;
  border-color: #ebebeb;
`;
