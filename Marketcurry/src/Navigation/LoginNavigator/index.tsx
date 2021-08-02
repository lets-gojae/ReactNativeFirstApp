import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '~/Screens/Login';
import FindId from '~/Screens/Login/FindId';
import FindPw from '~/Screens/Login/FindPw';
import Signup from '~/Screens/Signup';

const Stack = createStackNavigator();

export default function LoginTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginModal"
        component={Login}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#2e2e2e',
          title: '로그인',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#D3D3D3',
          },
        }}
      />
      <Stack.Screen
        name="FindId"
        component={FindId}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#2e2e2e',
          title: '아이디 찾기',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#D3D3D3',
          },
        }}
      />
      <Stack.Screen
        name="FindPw"
        component={FindPw}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#2e2e2e',
          title: '비밀번호 찾기',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#D3D3D3',
          },
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#2e2e2e',
          title: '회원가입',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#D3D3D3',
          },
        }}
      />
    </Stack.Navigator>
  );
}
