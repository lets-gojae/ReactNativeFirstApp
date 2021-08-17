import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';

import Swiper from 'react-native-swiper';

interface Props {
  imageList: Array<string>;
}

const MainBanner = ({imageList}: Props) => {
  const renderPagination = (index: number, total: number) => {
    return (
      <StyledPagination>
        <StyledTotalText>
          <StyledPaginationText>{index + 1}</StyledPaginationText>/{total}
        </StyledTotalText>
      </StyledPagination>
    );
  };

  return (
    <Swiper
      style={{height: 390}}
      renderPagination={renderPagination}
      loop={false}
      autoplay={true}
      autoplayTimeout={3}
      showsButtons={false}>
      {imageList.map((img, index) => (
        <SlideContainer key={index}>
          <SlideImage source={{uri: img}} />
        </SlideContainer>
      ))}
    </Swiper>
  );
};

export default MainBanner;

const SlideContainer = Styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 390px;
`;

const SlideImage = Styled.Image`
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledPagination = Styled.View`
  ${Mixin.flexSet('center', 'center', 'column')};
  position: absolute;
  top: 350px;
  right: 20px;
  width: 40px;
  background-color: black;
  border-radius: 10px;
  opacity: 0.6;
`;

const StyledTotalText = Styled.Text`
  color: gray;
`;
const StyledPaginationText = Styled.Text`
  color: white;
  font-size: 14px;
`;
