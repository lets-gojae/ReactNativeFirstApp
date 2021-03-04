import React from 'react';
import Styled from 'styled-components/native';

import WeatherView from '~/Screens/WeatherView';

interface Props {}

const App = ({}: Props) => {
  return (
    <Container>
      <WeatherView />
    </Container>
  );
};

export default App;

const Container = Styled.View`
  flex: 1;
  background-color: #EEE
`;
