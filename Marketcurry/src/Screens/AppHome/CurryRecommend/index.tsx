import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';

import MainBanner from './MainBanner';
import RecommendProduct from './RecommendProduct';
import DailySpecial from './DailySpecial';
import SpecialOffer from './SpecialOffer';
import CheapPrice from './CheapPrice';
import MdRecommend from './MdRecommend';

interface Props {}

const HomeRecommend = ({}: Props) => {
  const {imageList} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <StyledScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <MainBanner imageList={imageList} />
        <RecommendProduct title={'이 상품 어떄요?'} />
        <DailySpecial title={'일일특가'} />
        <SpecialOffer title={'특가/혜택'} />
        <CheapPrice title={'놓치면 후회할 가격'} />
        <MdRecommendWrap>
          <MdrecommendText>MD의 추천</MdrecommendText>
          <MdRecommend />
        </MdRecommendWrap>
      </StyledScrollView>
    </Container>
  );
};

export default HomeRecommend;

const Container = Styled.View`  
  flex: 1;
`;

const StyledScrollView = Styled.ScrollView`
  flex: 1;  
  background-color: #f9f9f9;
`;

const MdRecommendWrap = Styled.View`
  margin: 0 16px 0 16px;
`;

const MdrecommendText = Styled.Text`
  /* margin-left: 16px; */
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;
