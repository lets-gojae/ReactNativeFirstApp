import React, {useContext} from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';

import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

interface Props {}

const CategoryRecommend = ({}: Props) => {
  const {recommendList} = useContext<IProductData>(UserContext);
  return (
    <Container>
      {console.log(recommendList)}
      <HeaderText>커리의 추천</HeaderText>
      <RecommendContainter>
        {recommendList.map((item, index) => (
          <RecommendList key={index}>
            <Image style={{height: 140}} source={{uri: item.image}} />
            <ImageName>{item.name}</ImageName>
          </RecommendList>
        ))}
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

const RecommendContainter = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
  flex-wrap: wrap;
  align-content: space-between;
`;

const RecommendList = Styled.TouchableOpacity`
  width: 179px;
  margin: 0 8px 16px 16px;
  border-width: 1px;
  border-color: #cfcfcf;
`;

const ImageName = Styled.Text`
  font-size: 16px;
  margin: 8px;
`;
