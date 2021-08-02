import React, {useContext} from 'react';
// import {} from 'react-native';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';
import KakaoBtn from '~/Components/KakaoBtn';
import NaverBtn from '~/Components/NaverBtn';
import Button from '~/Components/Button';
import Input from '~/Components/Input';

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'LoginModal'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const {signInWidthKakao, naverLogin, initials} =
    useContext<IUserContext>(UserContext);

  return (
    <Container>
      <FormContainer>
        <Input placeholder="아이디를 입력해주세요" />
        <Input
          style={{marginBottom: 32}}
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
        <SLContainer>
          <SocialLogin>소셜로그인으로 로그인</SocialLogin>
          <KakaoBtn
            label="카카오 로그인"
            style={{marginTop: 16, marginBottom: 8}}
            onPress={() => signInWidthKakao()}
          />

          <NaverBtn
            label="네이버 로그인"
            style={{marginBottom: 16}}
            onPress={() => naverLogin(initials)}
          />
        </SLContainer>
        <FindContainer>
          <Button
            label="아이디 찾기"
            style={{borderBottomWidth: 0}}
            color="#949494"
            onPress={() => navigation.navigate('FindId')}
          />
          <Line>|</Line>
          <Button
            label="비밀번호 찾기"
            style={{borderBottomWidth: 0}}
            color="#949494"
            onPress={() => navigation.navigate('FindPw')}
          />
        </FindContainer>
        <Button
          label="회원가입"
          style={{borderWidth: 1, borderColor: '#2e2e2e'}}
          color={`${Theme.colors.mainColor}`}
          onPress={() => navigation.navigate('Signup')}
        />
      </FormContainer>
    </Container>
  );
};

export default Login;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.white};
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

const SLContainer = Styled.View`
  margin-top: 24px;
  ${Mixin.flexSet('center', 'center', 'null')}  
`;

const SocialLogin = Styled.Text`
  color: #929292;
`;
