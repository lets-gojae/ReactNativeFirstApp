import React, {useContext} from 'react';
import {Image} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {UserContext} from '~/Context/MainProductData';

import Styled from 'styled-components/native';

interface Props {
  onPress?: () => void;
  id: number;
  name: string;
  image: string;
  price: number;
}

const Product = ({id, name, image, price, onPress}: Props) => {
  // const {goToProductDetail} = useContext<IProductData>(UserContext);

  return (
    <Container key={id} onPress={onPress}>
      <Image style={{height: 240}} source={{uri: image}} />
      <Text>{name}</Text>
      <Text style={{fontWeight: 'bold'}}>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
      </Text>
    </Container>
  );
};

export default Product;

const Container = Styled.TouchableOpacity`
  width: 170px;
  height: 200px;
  margin-right: 8px;
`;

const Text = Styled.Text`
  margin-top: 8px;
  font-size: 16px;
`;
