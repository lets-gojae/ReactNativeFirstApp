import React from 'react';
// import {} from 'react-native';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';

import Button from '~/Components/Button';
import Input from '~/Components/Input';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'FindId'>;
interface Props {
  navigation: NavigationProp;
}

const FindId = ({navigation}: Props) => {
  return (
    <Container>
      <FormContainer>
        <Input placeholder="이름을 입력해주세요" />
        <Input style={{marginBottom: 32}} placeholder="이메일을 입력해주세요" />
        <Button
          label="로그인"
          style={{
            backgroundColor: `${Theme.colors.mainColor}`,
          }}
          fontWeight="bold"
          onPress={() => navigation.goBack()}
        />
      </FormContainer>
    </Container>
  );
};

export default FindId;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.white}
`;

const FormContainer = Styled.View` 
  margin: 24px 24px 0 24px;
`;
