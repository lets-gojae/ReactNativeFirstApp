import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import {StackNavigationProp} from '@react-navigation/stack';

import {useDispatchContext} from '~/Context/Reducer';
import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

type NavigationProp = StackNavigationProp<ProductDetailNaviParamList, 'Review'>;
interface Props {
  navigation: NavigationProp;
  route: any;
}

const Review = ({navigation, route}: Props) => {
  const [title, setTitle] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [images, setImages] = useState<Array<string>>([]);
  const {item} = route.params;

  const dispatch = useDispatchContext();
  const setReview = () => {
    const reviewList = {
      title: title,
      bodyText: bodyText,
      image: images,
      writer: '고재원',
      date: date,
    };
    dispatch({type: 'SET_REVIEW', payload: [reviewList]});
  };

  const showCameraRoll = () => {
    ImagePicker.openPicker({
      multiple: true,
      maxFiles: 4,
    }).then(images => {
      setImages(images.map(i => i.path));
    });
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
        <HeaderName>구매 후기 작성</HeaderName>
      </Header>
      <ItemName>{item.name}</ItemName>
      <ReviewContainer>
        <ReviewHeader>후기 쓰기</ReviewHeader>
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
              title.length !== 0 && bodyText.length >= 10
                ? '#5f0180'
                : '#efefef',
          }}
          onPress={() => {
            setReview();
            navigation.goBack();
          }}
          disabled={title.length !== 0 && bodyText.length >= 10 ? false : true}>
          <SubmitText>등록하기</SubmitText>
        </SubmitBtn>
        <ImageHeader>
          <HeaderText>사진 등록</HeaderText>
          <ImageWrap>
            {images.map((image: string, index: number) => (
              <AddImage key={index} source={{uri: image}} />
            ))}
            <PickImage onPress={showCameraRoll}>
              <AntDesign name="plus" style={{color: '#cfcfcf'}} size={32} />
            </PickImage>
          </ImageWrap>
        </ImageHeader>
      </ReviewContainer>
    </Container>
  );
};

export default Review;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const Header = Styled.View`
  ${Mixin.flexSet('null', 'flex-start', 'row')};
  margin: 8px 16px 8px 16px;
  background-color: ${Theme.colors.backColor};
`;

const HeaderName = Styled.Text`
  margin-left: 48px;
  font-size: 16px;
  font-weight: 500;
`;

const ItemName = Styled.Text`
  margin: 16px 24px 0 24px;
  padding: 8px 0 8px 8px;
  font-size: 16px;
  background-color: ${Theme.colors.containerColor};
`;

const ReviewContainer = Styled.SafeAreaView`
  flex: 1;
  margin: 32px 24px 0 24px;
`;

const ReviewHeader = Styled.Text`
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
  height: 300px;
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

const ImageHeader = Styled.View`
  margin: 40px 0 24px 0;
`;

const HeaderText = Styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const ImageWrap = Styled.View`
  ${Mixin.flexSet('flex-start', 'center', 'row')};
`;

const PickImage = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'null')};
  width: 72px;
  height: 72px;
  border: 1px;
  border-radius: 4px;
  border-color: #cfcfcf;
`;

const AddImage = Styled.Image`
  width: 64px;
  height: 64px;
  margin-right: 5px;
  border-radius: 3px;
`;
