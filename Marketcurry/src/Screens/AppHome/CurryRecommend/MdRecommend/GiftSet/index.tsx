import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';

interface Props {}

const GiftSet = ({}: Props) => {
  return (
    <Container>
      <Text>12dwadawfesnasiufgbasiefubsifubsfeui3</Text>
    </Container>
  );
};

export default GiftSet;

const Container = Styled.View`
  background-color: ${Theme.colors.backColor}
  height: 200px;
`;

const Text = Styled.Text``;
