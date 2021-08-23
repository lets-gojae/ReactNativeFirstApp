import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';

interface Props {}

const Seafood = ({}: Props) => {
  return (
    <Container>
      <Text>12dwadawfesnasiufgbasiefubsifubsfeui3</Text>
    </Container>
  );
};

export default Seafood;

const Container = Styled.View`
  background-color: ${Theme.colors.backColor}
  height: 200px;
`;

const Text = Styled.Text``;
