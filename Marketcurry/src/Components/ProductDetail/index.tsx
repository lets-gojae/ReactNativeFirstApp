import React, {useState} from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductReview from './ProductReview';
import ProductInquire from './ProductInquire';
import Button from '~/Components/Button';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

type NavigationProp = StackNavigationProp<
  ProductDetailNaviParamList,
  'ProductDetail'
>;
interface Props {
  navigation: NavigationProp;
  productData: IProduct;
  route: any;
}

const ProductDetail = ({navigation, route}: Props) => {
  const {item} = route.params;
  const [btnToggle, setBtnToggle] = useState<boolean>(false);

  const DetailTopTap = createMaterialTopTabNavigator();

  return (
    <ItemContainer>
      <Header>
        <AntDesign name="left" size={20} onPress={() => navigation.goBack()} />
        <HeaderName>{item.name}</HeaderName>
      </Header>
      <DetailTopTap.Navigator
        tabBarOptions={{
          activeTintColor: Theme.colors.mainColor,
          inactiveTintColor: Theme.colors.grayColor,
          pressColor: Theme.colors.mainColor,
          indicatorStyle: {
            borderBottomWidth: 3,
            borderBottomColor: Theme.colors.mainColor,
          },
          labelStyle: {
            fontSize: 15,
            fontWeight: '600',
          },
          style: {
            marginLeft: 8,
            marginRight: 8,
            backgroundColor: `${Theme.colors.backColor}`,
          },
        }}>
        <DetailTopTap.Screen name="상품설명">
          {props => <ProductInfo {...props} item={item} />}
        </DetailTopTap.Screen>
        <DetailTopTap.Screen name="상세정보">
          {props => <ProductDescription {...props} item={item} />}
        </DetailTopTap.Screen>
        <DetailTopTap.Screen name="구매후기" component={ProductReview} />
        <DetailTopTap.Screen name="상품문의" component={ProductInquire} />
      </DetailTopTap.Navigator>
      <Footer>
        <Heart onPress={() => setBtnToggle(!btnToggle)}>
          {btnToggle ? (
            <AntDesign name="heart" size={20} />
          ) : (
            <AntDesign name="hearto" size={20} />
          )}
        </Heart>
        <Button
          label="구매하기"
          style={{
            width: 310,
            backgroundColor: `${Theme.colors.mainColor}`,
          }}
          fontWeight="bold"
        />
      </Footer>
    </ItemContainer>
  );
};

export default ProductDetail;

const ItemContainer = Styled.SafeAreaView`
  background-color: ${Theme.colors.backColor};
  flex: 1;
`;

const Header = Styled.View`
  ${Mixin.flexSet('null', 'flex-start', 'row')};
  margin: 8px 16px 8px 16px;
  background-color: ${Theme.colors.backColor};
`;

const HeaderName = Styled.Text`
  margin-left: 60px;
  font-size: 16px;
  font-weight: bold;
`;

const Footer = Styled.View`
  height: 80px;
  margin: 0 8px 0 8px;
  ${Mixin.flexSet('center', 'center', 'row')};
`;

const Heart = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'null')};
  width: 60px;
  height: 56px;   
  margin-right: 8px;
  border: 1px;
  border-color: #bdbdbd;
  border-radius: 4px;
`;
