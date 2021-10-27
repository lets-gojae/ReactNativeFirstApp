import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeRecommend from '~/Screens/AppHome/CurryRecommend';
import NewProduct from '~/Screens/AppHome/NewProduct';
import BestProduct from '~/Screens/AppHome/BestProduct';
import ThriftyShopping from '~/Screens/AppHome/ThriftyShopping';
import Event from '~/Screens/AppHome/Event';
import ProductDetail from '~/Components/ProductDetail';
import Review from '~/Components/ProductDetail/ProductReview/WritingReview';
import ReviewDetail from '~/Components/ProductDetail/ProductReview/ReviewDetail';
import Inquiry from '~/Components/ProductDetail/ProductInquire/Inquiry';

import {Theme} from '~/styles/Theme';

const Stack = createStackNavigator();
const MainTopTab = createMaterialTopTabNavigator();
const DetailTopTap = createMaterialTopTabNavigator();

const HomeTabNavi = () => {
  return (
    <MainTopTab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.colors.mainColor,
        inactiveTintColor: Theme.colors.grayColor,
        pressColor: Theme.colors.mainColor,
        indicatorStyle: {
          borderBottomWidth: 3,
          borderBottomColor: Theme.colors.mainColor,
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        style: {
          marginLeft: 8,
          marginRight: 8,
          backgroundColor: `${Theme.colors.backColor}`,
        },
      }}>
      <MainTopTab.Screen name="커리추천" component={HomeRecommend} />
      <MainTopTab.Screen name="신상품" component={NewProduct} />
      <MainTopTab.Screen name="베스트" component={BestProduct} />
      <MainTopTab.Screen name="알뜰쇼핑" component={ThriftyShopping} />
      <MainTopTab.Screen name="이벤트" component={Event} />
    </MainTopTab.Navigator>
  );
};

export default function TopTa() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.mainColor,
        },
        headerTintColor: Theme.colors.tintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="홈"
        component={HomeTabNavi}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 88, height: 40}}
              source={require('~/Assets/Images/app_text.png')}
              resizeMode="cover"
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inquiry"
        component={Inquiry}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
