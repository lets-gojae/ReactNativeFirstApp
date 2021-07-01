import React, {useContext} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import {UserContext} from '~/Context/User';

import Loading from '~/Screens/Loading';

import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'MOVIEAPP',
          headerTransparent: true,
          headerTintColor: '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const MovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieHome"
        component={MovieHome}
        options={{
          title: 'MovieHome',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const {result, userInfo} = useContext<IUserContext>(UserContext);

  // if (isLoading === false) {
  //   return <Loading />;
  // }

  return (
    <NavigationContainer>
      {userInfo || result ? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
