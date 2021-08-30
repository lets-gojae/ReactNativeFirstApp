import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/MainProductData';

import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import Products from '~/Components/Products';

interface Props {}

const SeaFood = ({}: Props) => {
  const {productData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      {productData
        .filter(item => item.mdRecommend === true)
        .filter(item => item.category === 3)
        .map((item, index) => (
          <Products
            width={120}
            height={160}
            nameFont={16}
            id={index}
            name={item.name}
            image={item.image}
            price={item.price}
            discount={item.discount}
            discountPrice={item.discountPrice}
          />
        ))}
    </Container>
  );
};

export default SeaFood;

const Container = Styled.View`
  ${Mixin.flexSet('space-between', 'flex-start', 'row')};
  flex: 1;
  flex-wrap: wrap;
  background-color: ${Theme.colors.backColor};
`;
