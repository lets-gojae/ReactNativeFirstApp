import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useDispatchContext} from '~/Context/Reducer';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

type NavigationProp = StackNavigationProp<
  ProductDetailNaviParamList,
  'Inquiry'
>;
interface Props {
  navigation: NavigationProp;
  route: any;
}

const Inquiry = ({navigation, route}: Props) => {
  const [title, setTitle] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const {item} = route.params;

  const dispatch = useDispatchContext();
  const setReview = () => {
    const inquiryList = {
      title: title,
      bodyText: bodyText,
      date: date,
      writer: '고재원',
    };
    dispatch({type: 'SET_INQUIRY', payload: [inquiryList]});
  };

  let today = new Date();
  let year = today.getFullYear().toString();
  let month = today.getMonth() + 1;
  let day = today.getDate().toString();
  useEffect(() => {
    setDate(year + ' ' + month + ' ' + day + ' ');
  });

  return (
    <Container>
      <Header>
        <AntDesign name="left" size={20} onPress={() => navigation.goBack()} />
        <HeaderName>구매 후기 상세</HeaderName>
      </Header>
      <ItemName>{item.name}</ItemName>
      <InquiryContainer>
        <InquiryHeader>문의 내용</InquiryHeader>
        <TitleInput
          placeholder="제목을 입력해주세요"
          autoFocus={true}
          autoCorrect={false}
          maxLength={50}
          returnKeyType="done"
          autoCapitalize="none"
          onChangeText={e => setTitle(e)}
        />
        <BodyText
          placeholder="1000자 이내로 작성하세요"
          autoFocus={true}
          autoCorrect={false}
          maxLength={1000}
          multiline={true}
          returnKeyType="done"
          autoCapitalize="none"
          onChangeText={e => setBodyText(e)}
        />
        <SubmitBtn
          style={{
            backgroundColor:
              title.length !== 0 && bodyText.length >= 5
                ? '#5f0180'
                : '#efefef',
          }}
          onPress={() => {
            setReview();
            navigation.goBack();
          }}
          disabled={title.length !== 0 && bodyText.length >= 5 ? false : true}>
          <SubmitText>문의하기</SubmitText>
        </SubmitBtn>
      </InquiryContainer>
    </Container>
  );
};

export default Inquiry;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const Header = Styled.View`
  ${Mixin.flexSet('null', 'flex-start', 'row')};
  padding: 0 16px 16px 16px;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
  background-color: ${Theme.colors.backColor};
`;

const HeaderName = Styled.Text`
  margin-left: 24px;
  font-size: 16px;
  font-weight: 500;
`;

const ItemName = Styled.Text`
  margin: 16px 24px 0 24px;
  padding: 8px 0 8px 8px;
  font-size: 16px;
  background-color: ${Theme.colors.containerColor};
`;

const InquiryContainer = Styled.SafeAreaView`
  flex: 1;
  margin: 32px 24px 0 24px;
`;

const InquiryHeader = Styled.Text`
  margin-bottom: 16px;  
  font-size: 16px;
  font-weight: 500;
`;

const TitleInput = Styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px;
  border-color: #cfcfcf;
  padding: 0px 8px;
`;

const BodyText = Styled.TextInput`
  width: 100%;
  height: 450px;
  margin: 24px 0 24px 0;
  border: 1px;
  border-color: #cfcfcf;
  padding: 0px 8px;
`;

const SubmitBtn = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'null')};
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border-color: #D3D3D3;
`;

const SubmitText = Styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ababab;
`;
