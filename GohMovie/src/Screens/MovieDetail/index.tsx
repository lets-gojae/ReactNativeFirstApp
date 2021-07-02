import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';

import Loading from '~/Screens/Loading';
import BigCatalog from '~/Components/BigCatalog';
// import CastList from './CastList';
// import ScreenShotList from './ScreenShotList';

type ProfileScreenRouteProp = RouteProp<MovieNaviParamList, 'MovieDetail'>;
interface Props {
  route: ProfileScreenRouteProp;
}

const MovieDetail = ({route}: Props) => {
  const [data, setData] = useState<IMovieDetail>();

  useEffect(() => {
    const {id} = route.params;
    fetch(
      `https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json.data.movie);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return data ? (
    <Container>
      <ContainerTitle>영화 정보</ContainerTitle>
      <InfoContainer>
        <LabelInfo>{data.runtime}분</LabelInfo>
      </InfoContainer>
    </Container>
  ) : (
    <Loading />
  );
};

export default MovieDetail;

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;
const ContainerTitle = Styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const DescriptionContainer = Styled.View``;
const Description = Styled.Text`
  padding: 0 16px;
  color: #FFFFFF;
`;
const SubInfoContainer = Styled.View``;
const InfoContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
const LabelInfo = Styled.Text`
  color: #FFFFFF;
`;
