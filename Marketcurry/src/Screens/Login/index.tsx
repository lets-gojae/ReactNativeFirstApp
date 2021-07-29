import React from 'react';
// import {} from 'react-native';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';

import Button from '~/Components/Button';
import Input from '~/Components/Input';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

type NavigationProp = StackNavigationProp<NaviParamList, 'goBack'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  return (
    <Container>
      <FormContainer>
        <Input placeholder="아이디를 입력해주세요" />
        <Input
          style={{marginBottom: 24}}
          placeholder="비밀번호를 입력해주세요"
        />
        <Button
          label="로그인"
          style={{
            backgroundColor: `${Theme.colors.mainColor}`,
          }}
          fontWeight="bold"
          onPress={() => navigation.goBack()}
        />
        <FindContainer>
          <Button
            label="아이디 찾기"
            style={{borderBottomWidth: 0}}
            color="#949494"
            onPress={() => navigation.goBack()}
          />
          <Line>|</Line>
          <Button
            label="비밀번호 찾기"
            style={{borderBottomWidth: 0}}
            color="#949494"
            onPress={() => navigation.goBack()}
          />
        </FindContainer>
        <Button
          label="회원가입"
          style={{borderWidth: 1, borderColor: '#2e2e2e'}}
          color={`${Theme.colors.mainColor}`}
          onPress={() => navigation.goBack()}
        />
      </FormContainer>
    </Container>
  );
};

export default Login;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.white}
`;

const FormContainer = Styled.View` 
  margin: 24px 24px 0 24px;
`;

const FindContainer = Styled.View`
  ${Mixin.flexSet('space-between', 'center', 'row')}
  margin-bottom: 32px;
  padding: 0 96px 0 96px;
  color: #949494;
`;

const Line = Styled.Text`
font-size: 16px;
color: #D3D3D3;
`;
