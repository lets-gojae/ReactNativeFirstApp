import React, {useContext} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';

import Loading from '~/Screens/Loading';

import Login from '~/Screens/Login';

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

export default () => {
  // const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  // if (isLoading === false) {
  //   return <Loading />;
  // }
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};
