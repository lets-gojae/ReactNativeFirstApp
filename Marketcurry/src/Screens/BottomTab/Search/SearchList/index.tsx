import React from 'react';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

interface Props {
  id: number;
  name: string;
}

const SearchList = ({id, name}: Props) => {
  return (
    <Container>
      <SearchItem>
        <ItemName>{name}</ItemName>
      </SearchItem>
    </Container>
  );
};

export default SearchList;

const Container = Styled.View``;

const SearchItem = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'row')};
  width: 390px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: ${Theme.colors.mainColor};
`;

const ItemName = Styled.Text``;
