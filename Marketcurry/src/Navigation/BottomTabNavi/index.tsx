import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {Theme} from '~/styles/Theme';
import HomeTab from '~/Navigation/TopTabNavi';

import Recommend from '~/Screens/BottomTab/Recommend';
import Category from '~/Screens/BottomTab/Category';
import Search from '~/Screens/BottomTab/Search';
import MyCurry from '~/Screens/BottomTab/MyCurry';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

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

export default function BottomNavigator() {
  const setTabBarVisible = (route: any) => {
    const routeName: any = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['ProductDetail'];
    if (hideOnScreens.indexOf(routeName) > -1) return false;
    return true;
  };

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#81B247',
      }}>
      <BottomTab.Screen
        name="홈"
        component={HomeTab}
        options={({route}) => ({
          tabBarVisible: setTabBarVisible(route),
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
        })}
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
}
