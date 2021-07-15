import React, {useContext, useState, useEffect, createRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';
import Styled from 'styled-components/native';

import {RandomUserDataContext} from '~/Context/RandomUserData';
import tab from '~/Components/Tab';
import NotificationList from './NotificationList';

interface Props {}

const Notification = ({}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [followingList, setFollowingList] = useState<Array<IFeed>>([]);
  const [myNotifications, setMyNotifications] = useState<Array<IFeed>>([]);
  const [tabIndex, setTabIndex] = useState<number>(1);
  const width = Dimensions.get('window').width;
  const tabs = ['팔로잉', '내 소식'];
  const refScrollView = createRef<ScrollView>();

  useEffect(() => {
    setFollowingList(getMyFeed(24));
    setMyNotifications(getMyFeed(24));
  }, []);

  return <></>;
};

export default Notification;
