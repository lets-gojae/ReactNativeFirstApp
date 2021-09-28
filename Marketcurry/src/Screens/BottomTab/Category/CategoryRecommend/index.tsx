import React from 'react';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

interface Props {}

const CategoryRecommend = ({}: Props) => {
  return (
    <Container>
      <HeaderText>컬리의 추천</HeaderText>
      <RecommendContainter>
        <RecommendList></RecommendList>
      </RecommendContainter>
    </Container>
  );
};

export default CategoryRecommend;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const HeaderText = Styled.Text`
  margin: 32px 0 24px 16px;
  font-size: 18px;
  font-weight: 600;
`;

const RecommendContainter = Styled.View``;

const RecommendList = Styled.View``;
