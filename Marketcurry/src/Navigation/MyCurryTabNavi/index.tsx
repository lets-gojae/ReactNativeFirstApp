import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '~/Screens/Login';
import OrderInquiry from '~/Screens/BottomTab/MyCurry/OrderInquiry';
import NotiSettings from '~/Screens/BottomTab/MyCurry/NotiSettings';
import MyCurry from '~/Screens/BottomTab/MyCurry';

const Stack = createStackNavigator();

export default function MyCurryStack() {
  return (
    <Stack.Navigator>
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
}
