import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import Button from '~/Components/Button';

import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/MainProductData';

import {Theme} from '~/styles/Theme';

interface Props {
  item: any;
}

const ReviewItem = ({item}: Props) => {
  return <Container>{/* <Label>{item}</Label> */}</Container>;
};

export default ReviewItem;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const Label = Styled.Text`

`;
