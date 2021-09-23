import React, {useState} from 'react';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useStateContext} from '~/Context/Reducer';
import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

import Button from '~/Components/Button';

type NavigtaionProp = StackNavigationProp<
  ProductDetailNaviParamList,
  'Inquiry'
>;

interface Props {
  navigation: NavigtaionProp;
  item: IProduct;
  index: number;
}

const ProductInquire = ({item, navigation}: Props) => {
  const [hidden, hiddenSet] = useState<any>({});

  const hideMe = (index: number) => {
    hiddenSet({...hidden, [index]: !hidden[index]});
  };

  const state = useStateContext();
  const inquiry = state.inquiry;

  return (
    <Container>
      <Button
        label="상품 문의하기"
        style={{
          borderWidth: 1,
          borderColor: `${Theme.colors.mainColor}`,
        }}
        color={`${Theme.colors.mainColor}`}
        onPress={() => navigation.navigate('Inquiry', {item})}
      />
      <InquiryContainer>
        {inquiry.map((item, index) => (
          <InquiryWrap key={index} onPress={() => hideMe(index)}>
            <TitleWrap>
              <Title>{item.title}</Title>
            </TitleWrap>
            <Bottom>
              <Writer>{item.writer}</Writer>
              <Line />
              <Date>{item.date}</Date>
            </Bottom>
            {hidden[index] ? (
              <MainTextWrap>
                <AntDesign
                  name="questioncircle"
                  size={24}
                  style={{color: `${Theme.colors.mainColor}`, marginLeft: 16}}
                />
                <MainText>{item.bodyText}</MainText>
              </MainTextWrap>
            ) : null}
          </InquiryWrap>
        ))}
      </InquiryContainer>
    </Container>
  );
};

export default ProductInquire;

const Container = Styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${Theme.colors.backColor};
`;

const InquiryContainer = Styled.ScrollView`
  margin-top: 16px;
`;

const InquiryWrap = Styled.TouchableOpacity`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
`;

const TitleWrap = Styled.View`
  ${Mixin.flexSet('space-between', 'null', 'row')};
`;

const Title = Styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Bottom = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
`;

const Writer = Styled.Text`
  font-size: 16px; 
  margin: 0 8px 4px 0;
  color: gray;
`;

const Line = Styled.View`
  border-right-width: 1px;
  border-color: #cfcfcf;
  margin-right: 8px;
`;

const Date = Styled.Text`
  font-size: 16px; 
  color: gray;
`;

const MainTextWrap = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
  margin-top: 16px;
  padding: 24px 0 24px 0;
  background-color: #ebebeb;
`;

const MainText = Styled.Text`
  margin-left: 16px;
  font-size: 16px;
`;
