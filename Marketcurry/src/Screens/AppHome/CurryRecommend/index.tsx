import React, {useState, useEffect, useContext} from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';

import MainBanner from './MainBanner';
import RecommendProduct from './RecommendProduct';
import DailySpecial from './DailySpecial';
import SpecialOffer from './SpecialOffer';

import {Mixin} from '~/styles/Mixin';

interface Props {}

const HomeRecommend = ({}: Props) => {
  // const [imageList, setImageList] = useState<Array<string>>([]);

  const {imageList, productData} = useContext<IProductData>(UserContext);

  return (
    <ViewContainer>
      <StyledScrollView bounces={false}>
        <MainBanner imageList={imageList} />
        <RecommendProduct title={'이 상품 어떄요?'} />
        <DailySpecial />
        <SpecialOffer />
      </StyledScrollView>
    </ViewContainer>
  );
};

export default HomeRecommend;

const ViewContainer = Styled.View`  
  flex: 1;
`;

const StyledScrollView = Styled.ScrollView`
  flex: 1;  
  background-color: #f9f9f9;
`;
