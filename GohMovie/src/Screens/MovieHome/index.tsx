import React, {useEffect, useLayoutEffect, useContext} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserContext} from '~/Context/User';

import Button from '~/Components/Button';
import {NavigationContainer} from '@react-navigation/native';

type NavigationProp = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;
interface Props {
  navigation: NavigationProp;
}

const MovieHome = ({navigation}: Props) => {
  const {signOut} = useContext<IUserContext>(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <StyleButton
          onPress={() => {
            signOut();
          }}>
          <Icon source={require('~/Assets/Images/ic_logout.png')} />
        </StyleButton>
      ),
    });
  });

  return <></>;
};

export default MovieHome;

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;

const Icon = Styled.Image``;
