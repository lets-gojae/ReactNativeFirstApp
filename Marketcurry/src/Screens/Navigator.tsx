import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Theme} from '~/styles/Theme';

import LoginTab from '~/Navigation/LoginNavigator';
import FindId from '~/Screens/Login/FindId';
import FindPw from '~/Screens/Login/FindPw';

import HomeRecommend from '~/Screens/AppHome/CurryRecommend';
import NewProduct from '~/Screens/AppHome/NewProduct';
import BestProduct from '~/Screens/AppHome/BestProduct';
import ThriftyShopping from '~/Screens/AppHome/ThriftyShopping';
import Event from '~/Screens/AppHome/Event';
import Recommend from '~/Screens/BottomTab/Recommend';
import Category from '~/Screens/BottomTab/Category';
import Search from '~/Screens/BottomTab/Search';
import MyCurry from '~/Screens/BottomTab/MyCurry';

import Login from '~/Screens/Login';

const Stack = createStackNavigator();
const MainTabStack = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

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

const HomeTab = () => {
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
    </Stack.Navigator>
  );
};

const RecommendTab = () => {
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
      <Stack.Screen name="추천" component={Recommend} />
    </Stack.Navigator>
  );
};

const CategoryTab = () => {
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
      <Stack.Screen name="카테고리" component={Category} />
    </Stack.Navigator>
  );
};

const SearchTab = () => {
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
      <Stack.Screen name="검색" component={Search} />
    </Stack.Navigator>
  );
};

const MyCurryTab = () => {
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
      <Stack.Screen name="마이커리" component={MyCurry} />
    </Stack.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#81B247',
      }}>
      <BottomTab.Screen
        name="홈"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{tintColor: `${Theme.colors.mainColor}`}}
              source={
                focused
                  ? require('~/Assets/Images/BottomTab/home_tab.png')
                  : require('~/Assets/Images/BottomTab/home_tab_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="추천"
        component={RecommendTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{tintColor: `${Theme.colors.mainColor}`}}
              source={
                focused
                  ? require('~/Assets/Images/BottomTab/recommend_tab.png')
                  : require('~/Assets/Images/BottomTab/recommend_tab_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="카테고리"
        component={CategoryTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{tintColor: `${Theme.colors.mainColor}`}}
              source={require('~/Assets/Images/BottomTab/dehaze_tab.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="검색"
        component={SearchTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{tintColor: `${Theme.colors.mainColor}`}}
              source={require('~/Assets/Images/BottomTab/search_tab.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="마이컬리"
        component={MyCurryTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{tintColor: `${Theme.colors.mainColor}`}}
              source={
                focused
                  ? require('~/Assets/Images/BottomTab/person_tab.png')
                  : require('~/Assets/Images/BottomTab/person_tab_outline.png')
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigator = () => {
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
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
