import React, {useEffect, useLayoutEffect, useContext} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserContext} from '~/Context/User';
import {NavigationContainer} from '@react-navigation/native';

import Button from '~/Components/Button';
import BitCatalogList from '~/Screens/MovieHome/BigCatalogList';
import SubCatalogList from '~/Screens/MovieHome/SubCatalogList';

import AsyncStorage from '@react-native-community/async-storage';

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

  return (
    <Container>
      <BitCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {id});
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {id});
        }}
      />
      <SubCatalogList
        title="평점순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container>
  );
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
