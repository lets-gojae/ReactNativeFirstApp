import React from 'react';
import {Image, Dimensions} from 'react-native';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Mixin} from '~/styles/Mixin';
import {Theme} from '~/styles/Theme';

type NavigationProp = StackNavigationProp<ProductDetailNaviParamList, 'Review'>;
interface Props {
  navigation: NavigationProp;
  route: any;
}

const ReviewDetail = ({navigation, route}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const {i, item} = route.params;

  return (
    <Container>
      <Header>
        <AntDesign name="left" size={20} onPress={() => navigation.goBack()} />
        <HeaderName>구매 후기 상세</HeaderName>
      </Header>
      <ReviewWrap>
        <DetailContainer>
          <ProductName>{item.name}</ProductName>
          <Line />
          <ImageWrap>
            {i.image.map((image: string, index: number) => (
              <Image
                key={index}
                style={{
                  width: '100%',
                  height: 500,
                  marginBottom: 16,
                }}
                source={{uri: image.toString()}}
              />
            ))}
          </ImageWrap>
          <Title>{i.title}</Title>
          <Content>{i.bodyText}</Content>
          <Date>{i.date} 작성</Date>
          <Line />
        </DetailContainer>
      </ReviewWrap>
    </Container>
  );
};

export default ReviewDetail;

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const ReviewWrap = Styled.ScrollView`
  background-color: #ededed;
`;

const Header = Styled.View`
  ${Mixin.flexSet('null', 'flex-start', 'row')};
  /* margin: 8px 0 8px 0; */
  padding: 0 16px 16px 16px;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
  background-color: ${Theme.colors.backColor};
`;

const HeaderName = Styled.Text`
  margin-left: 24px;
  font-size: 16px;
  font-weight: bold;
`;

const DetailContainer = Styled.View`
  margin: 8px 0 16px 0;
  padding: 16px 24px 16px 24px;
  background-color: ${Theme.colors.backColor};
`;

const ProductName = Styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const Line = Styled.View`
  margin: 16px 0 16px 0;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
`;

const ImageWrap = Styled.View`
  ${Mixin.flexSet('center', 'center', 'null')};
`;

const Title = Styled.Text`
  margin: 0 0 8px 0;
  font-weight: 500;
  font-size: 18px;
`;

const Content = Styled.Text`
  margin-bottom: 8px;
  font-size: 16px; 
  font-weight: 400;

`;

const Date = Styled.Text`
  margin: 16px 0 0 0;
  font-size: 15px; 
  color: gray;
`;
