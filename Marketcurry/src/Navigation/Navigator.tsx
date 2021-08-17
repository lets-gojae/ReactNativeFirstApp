import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from '~/Navigation/BottomTabNavi';
import LoginTab from '~/Navigation/LoginStackNavi';

import OrderInquiry from '~/Screens/BottomTab/MyCurry/OrderInquiry';
import NotiSettings from '~/Screens/BottomTab/MyCurry/NotiSettings';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: '#2e2e2e',
      }}>
      <Stack.Screen
        name="BottomNavi"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginModal"
        component={LoginTab}
        options={{
          headerShown: false,
          title: '로그인',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#D3D3D3',
          },
        }}
      />
      <Stack.Screen
        name="OrderInquiry"
        component={OrderInquiry}
        options={{title: '비회원 주문 조회'}}
      />
      <Stack.Screen
        name="NotiSettings"
        component={NotiSettings}
        options={{title: '알림 설정'}}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
