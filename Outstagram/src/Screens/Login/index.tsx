import React, {useState, useEffect, useContext} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import KakaoBtn from '~/Components/KakaoBtn';
import NaverBtn from '~/Components/NaverBtn';
import {UserContext} from '~/Context/User';

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [pwValue, setPwValue] = useState<string>('');

  const {appLogin, signInWidthKakao, naverLogin, logout, initials} =
    useContext<IUserContext>(UserContext);

  return (
    <Container>
      <FormContainer>
        <Logo>OUTSTAGRAM</Logo>
        <Input
          style={{marginBottom: 16}}
          placeholder="이메일"
          onChangeText={text => setEmailValue(text)}
        />
        <Input
          style={{marginBottom: 16}}
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={text => setPwValue(text)}
        />
        <PasswordReset onPress={() => navigation.navigate('PasswordReset')}>
          비밀번호 재설정
        </PasswordReset>
        <Button
          label="로그인"
          style={{
            marginBottom: 24,
            backgroundColor: pwValue && emailValue ? '#3796EF' : '#9fc6eb',
          }}
          onPress={() => {
            appLogin('dev.yakuza@gmail.com', 'password');
          }}
        />
        <SocialLogin>소셜계정으로 로그인</SocialLogin>
        <KakaoBtn
          label="카카오 로그인"
          style={{marginBottom: 8}}
          onPress={() => signInWidthKakao()}
        />
        <NaverBtn
          label="네이버 로그인"
          style={{marginBottom: 24}}
          onPress={() => naverLogin(initials)}
        />
        <NaverBtn
          label="로그아웃"
          style={{marginBottom: 24}}
          onPress={() => logout()}
        />
        <SignupText>
          계정이 없으신가요?
          <SignupLink onPress={() => navigation.navigate('Signup')}>
            가입하기.
          </SignupLink>
        </SignupText>
      </FormContainer>
      <Footer>
        <Copyright>Outstagram from Gohgyeol</Copyright>
      </Footer>
    </Container>
  );
};

export default Login;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #FEFFFF;
`;
const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Logo = Styled.Text`
  color: #3796EF;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  color: #3796EF;
  text-align: right;
  margin-bottom: 24px;
`;

const SocialLogin = Styled.Text`
  margin-bottom: 16px;
  color: #929292;
`;

const SignupText = Styled.Text`
  color: #929292;
  text-align: center;
`;
const SignupLink = Styled.Text`
  color: #3796EF;
`;

const Footer = Styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #D3D3D3;
  padding: 8px;
`;
const Copyright = Styled.Text`
  color: #929292;
  text-align: center;
`;
