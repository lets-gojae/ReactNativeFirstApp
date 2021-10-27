import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import GiftSet from '~/Screens/AppHome/CurryRecommend/MdRecommend/GiftSet';
import Vegetable from '~/Screens/AppHome/CurryRecommend/MdRecommend/Vegetable';
import FruitNutRice from '~/Screens/AppHome/CurryRecommend/MdRecommend/FruitNutRice';
import Seafood from '~/Screens/AppHome/CurryRecommend/MdRecommend/Seafood';
import Butchery from '~/Screens/AppHome/CurryRecommend/MdRecommend/Butchery';
import MainDish from '~/Screens/AppHome/CurryRecommend/MdRecommend/MainDish';
import Salad from '~/Screens/AppHome/CurryRecommend/MdRecommend/Salad';

import {Theme} from '~/styles/Theme';

const MainTabStack = createMaterialTopTabNavigator();

export default function MdRecommend() {
  return (
    <MainTabStack.Navigator
      tabBarOptions={{
        renderIndicator: () => null,
        scrollEnabled: true,
        activeTintColor: Theme.colors.mainColor,
        inactiveTintColor: Theme.colors.grayColor,
        pressColor: Theme.colors.mainColor,
        labelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
        tabStyle: {
          width: 132,
        },
        style: {
          backgroundColor: Theme.colors.backColor,
        },
      }}>
      <MainTabStack.Screen name="추석 선물세트" component={GiftSet} />
      <MainTabStack.Screen name="채소" component={Vegetable} />
      <MainTabStack.Screen name="과일·견과·쌀" component={FruitNutRice} />
      <MainTabStack.Screen name="수산·해산·건어물" component={Seafood} />
      <MainTabStack.Screen name="정육·계란" component={Butchery} />
      <MainTabStack.Screen name="국·반찬·메인요리" component={MainDish} />
      <MainTabStack.Screen name="샐러드·간편식" component={Salad} />
    </MainTabStack.Navigator>
  );
}
