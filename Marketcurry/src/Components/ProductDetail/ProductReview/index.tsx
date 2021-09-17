import React, {useContext, useState, useEffect} from 'react';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';

import {Theme} from '~/styles/Theme';

import Button from '~/Components/Button';
import ReviewItem from './ReviewItem';

type NavigationProp = StackNavigationProp<
  ProductDetailNaviParamList,
  'ProductDetail'
>;

interface Props {
  navigation: NavigationProp;
  item: any;
}

const ProductReview = ({navigation, item}: Props) => {
  const [states, setStates] = useState<Array<string>>([]);
  // const {title} = reviewContext.reviewState;
  return (
    <Container>
      {/* {console.log(reviewContext.reviewState.title)} */}
      <ReviewWrap>
        <Button
          label="후기 쓰기"
          style={{
            borderWidth: 2,
            borderColor: `${Theme.colors.mainColor}`,
          }}
          color={`${Theme.colors.mainColor}`}
          onPress={() => navigation.navigate('ProductReview', {item})}
        />
        {/* <Review
          data={title}
          keyExtractor={(item, index) => {
            return `review-${index}`;
          }}
          renderItem={({item, index}) => <ReviewItem item={item} />}
        /> */}
      </ReviewWrap>
    </Container>
  );
};

export default ProductReview;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const ReviewWrap = Styled.View`
  margin: 16px;
`;

const Review = Styled.FlatList`
  margin-top: 48px;
`;

const ReviewText = Styled.Text``;
