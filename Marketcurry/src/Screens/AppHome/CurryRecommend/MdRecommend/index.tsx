import React from 'react';
import Styled from 'styled-components/native';

import MDRecommend from '~/Navigation/TopTabNavi/MDRecommend';

interface Props {
  title: string;
}

const MdRecommend = ({title}: Props) => {
  return (
    <Container>
      <MDRecommend />
    </Container>
  );
};

export default MdRecommend;

const Container = Styled.View``;
