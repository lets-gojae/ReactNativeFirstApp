import React from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#E70915" size="large" />
    </Container>
  );
};

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
