import React, {useState, useContext} from 'react';
import {Dimensions} from 'react-native';
import {UserContext} from '~/Context/MainProductData';
import Styled from 'styled-components/native';

import ImageModal from 'react-native-image-modal';

import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

interface Props {
  item: IProduct;
}

const ProductDescription = ({item}: Props) => {
  const [firstDropdown, setFirstDropdown] = useState<boolean>(false);
  const [secondDropdown, setSecondDropdown] = useState<boolean>(false);
  const [thirdDropdown, setThirdDropdown] = useState<boolean>(false);
  const {descriptionData} = useContext<IProductData>(UserContext);

  return (
    <Container>
      <HeaderWrap>
        <Header>
          <HeaderText>
            아래 이미지를 터치하면 확대해서 볼 수 있습니다.
          </HeaderText>
        </Header>
      </HeaderWrap>
      <ImageModal
        resizeMode="cover"
        imageBackgroundColor="#000000"
        style={{
          width: Dimensions.get('window').width,
          height: 600,
        }}
        source={{
          uri: item.image,
        }}
      />
      <ItemName>{item.name}</ItemName>
      {descriptionData.map((item, index) => (
        <DescriptionWrap key={index}>
          <ItemDescription>{item.name}</ItemDescription>
          <Description>{item.information}</Description>
        </DescriptionWrap>
      ))}
      <ExchangeInfoContainer>
        <ExchangeInfo>교환 및 환불 안내</ExchangeInfo>
        <ExchageText>
          교환 및 환불이 필요하신 경우 고객행복센터로 문의해주세요. 아래 항목을
          누르면 자세한 정책을 보실 수 있습니다.
        </ExchageText>
      </ExchangeInfoContainer>
      <DropdownContainer>
        <Dropdown onPress={() => setFirstDropdown(!firstDropdown)}>
          <DropdownText>01. 상품에 문제가 있는 경우</DropdownText>
        </Dropdown>
        {firstDropdown ? (
          <DropdownInfoContainer>
            <DropdownInfo>
              받으신 상품이 표시 광고 내용 또는 계약 내용과 다른 경우에는 상품을
              받은 날부터 3개월 이내, 그 사실을 알게 된 날부터 30일 이내에 교환
              및 환불을 요청하실 수 있습니다.
            </DropdownInfo>
          </DropdownInfoContainer>
        ) : null}
        <Dropdown onPress={() => setSecondDropdown(!secondDropdown)}>
          <DropdownText>02. 단순 변심, 주문 착오의 경우</DropdownText>
        </Dropdown>
        {secondDropdown ? (
          <DropdownInfoContainer>
            <DropdownInfo
              style={{color: `${Theme.colors.mainColor}`, marginBottom: 16}}>
              신선 / 냉장 / 냉동 식품
            </DropdownInfo>
            <DropdownInfo>
              재판매가 불가한 상품의 툭성상, 단순 변심, 주문 착오시 교환 및
              반품이 어려운 점 양해 부탁드립니다. 상품에 따라 조금씩 맛이 다를
              수 있으며, 개인의 기호에 따라 같은 상품도 다르게 느끼실 수
              있습니다.
            </DropdownInfo>
          </DropdownInfoContainer>
        ) : null}
      </DropdownContainer>
    </Container>
  );
};

export default ProductDescription;

const Container = Styled.ScrollView`
  flex: 1;
  background-color: ${Theme.colors.backColor};
`;

const HeaderWrap = Styled.View`
  ${Mixin.flexSet('center', 'center', 'null')};
  margin: 16px 0 16px 0;
`;

const Header = Styled.View`
  ${Mixin.flexSet('center', 'center', 'null')};
  width: 360px;
  height: 64px;
  background-color: #e3e3e3;
  border-radius: 60px;
`;

const HeaderText = Styled.Text`
  font-size: 16px;
`;

const ItemName = Styled.Text`
  margin: 40px 0 40px 0;
  text-align: center;
  font-size: 16px;
  color: gray;
`;

const DescriptionWrap = Styled.View`
  ${Mixin.flexSet('null', 'flex-start', 'row')};
  margin: 0 16px 16px 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: gray;
`;
const ItemDescription = Styled.Text`
  width: 100px;
  margin-right: 16px;
  font-size: 16px;
`;
const Description = Styled.Text`
  font-size: 16px;
  font-weight: 200;
`;

const ExchangeInfoContainer = Styled.View`
  ${Mixin.flexSet('null', 'center', 'null')};
  margin-bottom: 32px;
  padding-top: 48px;
  border-top-width: 10px;
  border-color: #e3e3e3;
`;

const ExchangeInfo = Styled.Text`
  color: ${Theme.colors.mainColor};
  font-size: 16px;
  margin-bottom: 8px;
`;

const ExchageText = Styled.Text`
  width: 329px;
  font-weight: 300;
  text-align: center;
`;

const DropdownContainer = Styled.View`
  margin-bottom: 80px;
`;

const Dropdown = Styled.TouchableOpacity`
  padding: 16px 0 16px 0;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #e3e3e3;

`;

const DropdownText = Styled.Text`
  color: ${Theme.colors.mainColor};
  text-align: center;
  font-size: 15px;
`;

const DropdownInfoContainer = Styled.View`
  background-color: #e3e3e3;
  padding: 32px 72px 32px 72px;
`;

const DropdownInfo = Styled.Text`
  font-size: 15px;
  text-align: center;
`;
