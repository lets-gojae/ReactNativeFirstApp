import React from 'react';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';

import Button from '~/Components/Button';

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'LoginModal'>;
interface Props {
  navigation: NavigationProp;
}

const MyCurryTab = ({navigation}: Props) => {
  return (
    <Container>
      <Button
        label="로그인/회원가입"
        style={{marginTop: 100}}
        color="black"
        onPress={() => navigation.navigate('LoginModal')}
      />
    </Container>
  );
};

export default MyCurryTab;

const Container = Styled.TouchableOpacity``;
