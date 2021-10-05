import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {UserContext} from '~/Context/MainProductData';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import CurryRanking from './CurryRanking';
import ManyReviews from './ManyReviews';
import GoodReviews from './GoodReviews';

const Recommend = () => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <StyledScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <CurryRanking title={'커리 트렌드 랭킹'} />
        <ManyReviews title={'후기 10,000개를 돌파한 상품'} />
        <GoodReviews title={'후기가 좋은 상품'} />
      </StyledScrollView>
    </Container>
  );
};

export default Recommend;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const StyledScrollView = Styled.ScrollView`
  flex: 1;  
  background-color: #f9f9f9;
`;
