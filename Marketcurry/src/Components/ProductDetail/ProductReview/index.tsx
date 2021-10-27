import React from 'react';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';

import {useStateContext} from '~/Context/Reducer';

import Button from '~/Components/Button';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

type NavigationProp = StackNavigationProp<
  ProductDetailNaviParamList,
  'ProductDetail'
>;

interface Props {
  navigation: NavigationProp;
  item: IProduct;
}

const ProductReview = ({navigation, item}: Props) => {
  const state = useStateContext();
  const review = state.review;

  return (
    <Container>
      <Button
        label="후기 쓰기"
        style={{
          borderWidth: 1,
          borderColor: `${Theme.colors.mainColor}`,
        }}
        color={`${Theme.colors.mainColor}`}
        onPress={() => navigation.navigate('Review', {item})}
      />
      <Review>
        {review.map((i, index) => (
          <ReviewContainer
            onPress={() => navigation.navigate('ReviewDetail', {i, item})}
            key={index}>
            <TitleWrap>
              <Title>{i.title}</Title>
              {i.image.length > 0 ? <Entypo name="image" size={20} /> : null}
            </TitleWrap>
            <Bottom>
              <Writer>{i.writer}</Writer>
              <Line />
              <Date>{i.date}</Date>
            </Bottom>
          </ReviewContainer>
        ))}
      </Review>
    </Container>
  );
};

export default ProductReview;

const Container = Styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${Theme.colors.backColor};
`;

const ReviewWrap = Styled.View`
  /* flex: 1;
  height: 100%; */

`;

const Review = Styled.ScrollView`
  margin-top: 16px;
`;

const ReviewContainer = Styled.TouchableOpacity`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
`;

const TitleWrap = Styled.View`
  ${Mixin.flexSet('space-between', 'null', 'row')};
`;

const Title = Styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Bottom = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
`;

const Writer = Styled.Text`
  font-size: 16px; 
  margin: 0 8px 4px 0;
  color: gray;
`;

const Line = Styled.View`
  border-right-width: 1px;
  border-color: #cfcfcf;
  margin-right: 8px;
`;

const Date = Styled.Text`
  font-size: 16px; 
  color: gray;
`;
