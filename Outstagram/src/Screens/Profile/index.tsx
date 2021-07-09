import React, {useState, useContext, useLayoutEffect, useEffect} from 'react';

import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
  navigation: NavigationProp;
}

const Profile = ({navigation}: Props) => {
  return <></>;
};

export default Profile;
