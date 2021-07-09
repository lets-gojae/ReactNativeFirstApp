import React, {useContext, useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
// import SplashScreen from 'react-native-splash-screen';

// import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
// import Feed from '~/Components/Feed';

// import StoryList from './StoryList';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed'>;
interface Props {
  navigation: NavigationProp;
}

const MyFeed = ({navigation}: Props) => {
  return <Container></Container>;
};

export default MyFeed;

const Container = Styled.View`
`;
