import React from 'react';
import Styled from 'styled-components/native';

import {Theme} from '~/styles/Theme';

interface Props {}

const WaterMilk = ({}: Props) => {
  return (
    <Container>
      <Text>12dwadawfesnasiufgbasiefubsifubsfeui3</Text>
    </Container>
  );
};

export default WaterMilk;

const Container = Styled.View`
  background-color: ${Theme.colors.backColor}
  height: 200px;
`;

const Text = Styled.Text``;
