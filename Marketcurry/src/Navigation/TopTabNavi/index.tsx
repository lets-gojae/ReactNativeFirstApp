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

import {Theme} from '~/styles/Theme';

const Stack = createStackNavigator();
const MainTabStack = createMaterialTopTabNavigator();

const HomeTabNavi = () => {
  return (
    <MainTabStack.Navigator
      tabBarOptions={{
        activeTintColor: Theme.colors.mainColor,
        inactiveTintColor: Theme.colors.grayColor,
        pressColor: Theme.colors.mainColor,
        indicatorStyle: {
          borderBottomWidth: 3,
          borderBottomColor: Theme.colors.mainColor,
        },
        labelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
      }}>
      <MainTabStack.Screen name="컬리추천" component={HomeRecommend} />
      <MainTabStack.Screen name="신상품" component={NewProduct} />
      <MainTabStack.Screen name="베스트" component={BestProduct} />
      <MainTabStack.Screen name="알뜰쇼핑" component={ThriftyShopping} />
      <MainTabStack.Screen name="이벤트" component={Event} />
    </MainTabStack.Navigator>
  );
};

export default function HomeTab() {
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
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
