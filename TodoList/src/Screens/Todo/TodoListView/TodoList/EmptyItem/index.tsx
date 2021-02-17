import React from 'react';
import Styled from 'styled-components/native';

interface Props {}

const EmptyItem = ({}: Props) => {
  return (
    <Container>
      <Label>하단에 "+" 버튼을 눌러 새로운 할 일을 등록해 본다.</Label>
    </Container>
  );
};

export default EmptyItem;

const Label = Styled.Text``;

const Container = Styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;
