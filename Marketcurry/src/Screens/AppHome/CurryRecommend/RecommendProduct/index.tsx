import React, {useState, useEffect, useContext} from 'react';
import {FlatList, Image} from 'react-native';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  item?: IProduct;
}

const RecommendProduct = ({title}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      <ProductWrap>
        <FlatList
          data={productData.filter(item => item.recommend === true)}
          keyExtractor={(item, index) => {
            return `renderItem-${index}`;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}: Props) => (
            <ItemContainer
              key={item?.id}
              onPress={() => navigation.navigate('ProductDetail', {item})}>
              <Image style={{height: 240}} source={{uri: item?.image}} />
              <Text>{item?.name}</Text>
              <Text style={{fontWeight: 'bold'}}>
                {item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                  '원'}
              </Text>
            </ItemContainer>
          )}
        />
      </ProductWrap>
    </Container>
  );
};

export default RecommendProduct;

const Container = Styled.View`
  width: 100%;
  height: 390px;
  margin-left: 16px;
  margin-bottom: 80px;
`;
const Header = Styled.View`
  ${Mixin.flexSet('flex-end', 'flex-start', 'column')};
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
  
`;

const HeaderText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Theme.fontColors.headerColor};
`;

const ProductWrap = Styled.TouchableOpacity`
  flex: 1;
`;

const ItemContainer = Styled.TouchableOpacity`
  width: 170px;
  height: 200px;
  margin-right: 8px;
`;

const Text = Styled.Text`
  margin-top: 8px;
  font-size: 16px;
`;
