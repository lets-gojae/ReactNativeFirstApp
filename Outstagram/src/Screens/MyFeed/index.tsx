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
  // const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const [storyList, setStoryList] = useState<Array<IFeed>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconButton iconName="camera" />,
      headerRight: () => (
        <HeaderRightContainer>
          <IconButton iconName="live" />
          <IconButton iconName="send" />
        </HeaderRightContainer>
      ),
    });
  }, []);

  // useEffect(() => {
  //   setFeedList(getMyFeed());
  //   setStoryList(getMyFeed());
  //   SplashScreen.hide();
  // }, []);

  return <Container></Container>;
};

export default MyFeed;

const Container = Styled.View`
`;

const HeaderRightContainer = Styled.View`
  flex-direction: row;
`;
