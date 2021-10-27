import React, {useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import Styled from 'styled-components/native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Button from '~/Components/Button';
import Input from '~/Components/Input';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

const Signup = () => {
  return (
    <Container>
      <ScrollView>
        <FormContainer>
          <InputText>아이디</InputText>
          <IdInput>
            <Input placeholder="예: marketcurry12" style={{width: '70%'}} />
            <Button
              label="중복확인"
              style={{width: 100, height: 56, borderWidth: 2, marginLeft: 8}}
              color="black"
            />
          </IdInput>
          <InputText>비밀번호</InputText>
          <Input placeholder="비밀번호를 입력해주세요" />
          <InputText>비밀번호 확인</InputText>
          <Input placeholder="비밀번호를 한번 더 입력해주세요" />
          <InputText>이름</InputText>
          <Input placeholder="이름을 입력해주세요" />
          <InputText>이메일</InputText>
          <Input placeholder="예: marketcurry@curry.com" />
          <InputText>휴대폰</InputText>
          <PhoneInput>
            <Input placeholder="숫자만 입력해주세요" style={{width: '64%'}} />
            <Button
              label="인증번호 받기"
              style={{width: 120, height: 56, borderWidth: 2}}
              color="black"
            />
          </PhoneInput>
          <InputText>주소</InputText>
          <Input placeholder="도로명, 지번, 건물명 검색" />
          <InputText>생년월일</InputText>
          <Input placeholder="YYYY    /   MM    /   DD" />
          <CheckBoxContainer>
            <InputText style={{marginBottom: 24}}>성별</InputText>
            <CheckBoxForm>
              <CheckBox>
                <BouncyCheckbox
                  text="남자"
                  size={25}
                  onPress={() => {}}
                  fillColor="#5f0180"
                  iconStyle={{borderColor: '#bfbfbf'}}
                  textStyle={{color: '#222222', textDecorationLine: 'none'}}
                />
              </CheckBox>
              <CheckBox>
                <BouncyCheckbox
                  text="여자"
                  size={25}
                  onPress={() => {}}
                  fillColor="#5f0180"
                  iconStyle={{borderColor: '#bfbfbf'}}
                  textStyle={{color: '#222222', textDecorationLine: 'none'}}
                />
              </CheckBox>
              <CheckBox>
                <BouncyCheckbox
                  text="선택안함"
                  size={25}
                  onPress={() => {}}
                  fillColor="#5f0180"
                  iconStyle={{borderColor: '#bfbfbf'}}
                  textStyle={{color: '#222222', textDecorationLine: 'none'}}
                />
              </CheckBox>
            </CheckBoxForm>
            <InputText style={{marginBottom: 8}}>추가입력 사항</InputText>
            <InputText style={{marginBottom: 24, color: '#bfbfbf'}}>
              추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.
            </InputText>
            <CheckBoxForm>
              <CheckBox>
                <BouncyCheckbox
                  text="추천인 아이디"
                  size={25}
                  onPress={() => {}}
                  fillColor="#5f0180"
                  iconStyle={{borderColor: '#bfbfbf'}}
                  textStyle={{color: '#222222', textDecorationLine: 'none'}}
                />
              </CheckBox>
              <CheckBox>
                <BouncyCheckbox
                  text="참여 이벤트명"
                  size={25}
                  onPress={() => {}}
                  fillColor="#5f0180"
                  iconStyle={{borderColor: '#bfbfbf'}}
                  textStyle={{color: '#222222', textDecorationLine: 'none'}}
                />
              </CheckBox>
            </CheckBoxForm>
          </CheckBoxContainer>
        </FormContainer>
        <Line />
        <Footer>
          <InputText>이용약관동의</InputText>
          <CheckBox>
            <BouncyCheckbox
              text="전체 동의합니다."
              size={25}
              onPress={() => {}}
              fillColor="#5f0180"
              iconStyle={{borderColor: '#bfbfbf'}}
              textStyle={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#222222',
                textDecorationLine: 'none',
              }}
            />
          </CheckBox>
          <InputText style={{color: '#bfbfbf'}}>
            선택 항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
            이용할 수 있습니다.
          </InputText>
          <CheckBox>
            <BouncyCheckbox
              text="이용약관 동의"
              size={25}
              onPress={() => {}}
              fillColor="#5f0180"
              iconStyle={{borderColor: '#bfbfbf'}}
              textStyle={{
                color: '#222222',
                textDecorationLine: 'none',
              }}
            />
          </CheckBox>
          <CheckBox>
            <BouncyCheckbox
              text="개인정보 수집 및 이용 동의"
              size={25}
              onPress={() => {}}
              fillColor="#5f0180"
              iconStyle={{borderColor: '#bfbfbf'}}
              textStyle={{
                color: '#222222',
                textDecorationLine: 'none',
              }}
            />
          </CheckBox>
          <CheckBox>
            <BouncyCheckbox
              text="개인정보 수집 및 이용 동의"
              size={25}
              onPress={() => {}}
              fillColor="#5f0180"
              iconStyle={{borderColor: '#bfbfbf'}}
              textStyle={{
                color: '#222222',
                textDecorationLine: 'none',
              }}
            />
          </CheckBox>
          <CheckBox>
            <BouncyCheckbox
              text="무료배송, 하일쿠폰 등 혜택/정보 수신 동의"
              size={25}
              onPress={() => {}}
              fillColor="#5f0180"
              iconStyle={{borderColor: '#bfbfbf'}}
              textStyle={{
                color: '#222222',
                textDecorationLine: 'none',
              }}
            />
          </CheckBox>
          <Button
            label="가입하기"
            style={{
              backgroundColor: `${Theme.colors.mainColor}`,
            }}
            fontWeight="bold"
          />
        </Footer>
      </ScrollView>
    </Container>
  );
};

export default Signup;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.white};
`;

const FormContainer = Styled.View`
  margin: 24px 24px 24px 24px;
`;

const IdInput = Styled.View`
  ${Mixin.flexSet('space-between', 'null', 'row')};
`;

const InputText = Styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`;

const PhoneInput = Styled.View`
  ${Mixin.flexSet('space-between', 'null', 'row')};
`;

const CheckBoxContainer = Styled.View`

`;

const CheckBoxForm = Styled.View`
  ${Mixin.flexSet('null', 'null', 'column')};
`;

const CheckBox = Styled.View`
  margin-bottom: 24px;
  ${Mixin.flexSet('null', 'null', 'row')};
`;

const Line = Styled.View`
  border: 6px;
  border-color: #ededed;
`;

const Footer = Styled.View`
  margin: 24px 24px 24px 24px;
`;
