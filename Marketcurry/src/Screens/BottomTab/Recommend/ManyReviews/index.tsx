import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {UserContext} from '~/Context/MainProductData';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import Products from '~/Components/Products';

interface Props {
  title: string;
}

const ManyReviews = ({title}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <ProductContainer>
        <HeaderWrap>
          <HeaderText>{title}</HeaderText>
        </HeaderWrap>
        <FlatList
          data={productData.filter(item => item.specialOffer === true)}
          keyExtractor={(item, index) => {
            return `manyReviews-${index}`;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Products
              style={{
                width: 160,
                marginTop: 16,
                marginRight: 8,
              }}
              key={index}
              width={180}
              height={220}
              nameFont={18}
              PriceFont={18}
              DiscountFont={18}
              DCPrice={18}
              marginRight={8}
              name={item.name}
              image={item.image}
              price={item.price}
              discount={item.discount}
              discountPrice={item.discountPrice}
            />
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default ManyReviews;

const Container = Styled.View`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const ProductContainer = Styled.View`
  margin: 24px 16px 0 16px;
`;

const HeaderWrap = Styled.TouchableOpacity``;

const HeaderText = Styled.Text`
  /* margin-bottom: 16px; */
  font-size: 20px;
  font-weight: bold;
`;
