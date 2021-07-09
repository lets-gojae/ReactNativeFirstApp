import React, {useContext, useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

// import {RandomUserDataContext} from '~/Context/RandomUserData';
// import ImageFeedList from '~/Components/ImageFeedList';

type NavigationProp = StackNavigationProp<FeedsTabParamList, 'Feeds'>;
interface Props {
  navigation: NavigationProp;
}

const Feeds = ({navigation}: Props) => {
  return <> </>;
};

export default Feeds;
