import React from 'react';
import Styled from 'styled-components/native';

interface Props {}

const Header = ({}: Props) => {
  return (
    <Container>
      <TitleLabel>Todo List App</TitleLabel>
    </Container>
  );
};

export default Header;

const Container = Styled.SafeAreaView`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
