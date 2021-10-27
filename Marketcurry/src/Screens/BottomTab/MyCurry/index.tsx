import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';
import {StackNavigationProp} from '@react-navigation/stack';

import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';
import Button from '~/Components/Button';

import {First} from './Data';

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'LoginModal'>;
interface Props {
  navigation: NavigationProp;
}

const MyCurryTab = ({navigation}: Props) => {
  const {logout, getnickName, loginToggle} =
    useContext<IUserContext>(UserContext);

  return (
    <Container>
      {loginToggle ? (
        <>
          <LoginContainer>
            <HeaderText>{getnickName}님</HeaderText>
          </LoginContainer>
        </>
      ) : (
        <>
          <LoginContainer>
            <HeaderText>회원 가입하고 </HeaderText>
            <HeaderText>다양한 혜택을 받아보세요!</HeaderText>
            <Button
              label="가입 혜택 보기"
              style={{marginBottom: 24}}
              color="#b0b0b0"
              onPress={() => navigation.navigate('LoginModal')}
            />
            <Button
              label="로그인 / 회원가입"
              style={{backgroundColor: `${Theme.colors.mainColor}`}}
              color="white"
              fontWeight="bold"
              onPress={() => navigation.navigate('LoginModal')}
            />
          </LoginContainer>
          <Line />
          <StackContainer>
            <Button
              label="비회원 주문 조회"
              style={{
                borderBottomWidth: 2,
                borderColor: '#fafafa',
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
              }}
              color="black"
              onPress={() => navigation.navigate('OrderInquiry')}
            />
            <Button
              label="알림 설정"
              style={{
                borderBottomWidth: 2,
                borderColor: '#fafafa',
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
              }}
              color="black"
              onPress={() => navigation.navigate('NotiSettings')}
            />
          </StackContainer>
        </>
      )}
      <StackContainer>
        <Button
          label="커리 소개"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        />
      </StackContainer>
      <Line />
      <StackContainer>
        {First.map((item, index) => (
          <Button
            key={index}
            label={item.name}
            style={{
              borderBottomWidth: 2,
              borderColor: '#fafafa',
              justifyContent: 'flex-end',
              flexDirection: 'row-reverse',
            }}
            color="black"
          />
        ))}
        {/* <Button
          label="커리 소개"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        />
        <Button
          label="배송 안내"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        />
        <Button
          label="공지사항"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        />
        <Button
          label="자주하는 질문"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        />
        <Button
          label="고객센터"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        />
        <Button
          label="이용안내"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
        /> */}
      </StackContainer>
      <Line />
      <StackContainer>
        <Button
          label="로그아웃"
          style={{
            borderBottomWidth: 2,
            borderColor: '#fafafa',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse',
          }}
          color="black"
          onPress={logout}
        />
      </StackContainer>
    </Container>
  );
};

export default MyCurryTab;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.white};
`;

const LoginContainer = Styled.View`
  ${Mixin.flexSet('center', 'center', 'null')};
  margin: 32px 24px 40px 24px;
`;

const HeaderText = Styled.Text`
  font-size: 20px;
`;

const Line = Styled.View`
  border: 6px;
  border-color: #ededed;
`;

const StackContainer = Styled.View`
  margin: 0 24px 0 24px;
`;
