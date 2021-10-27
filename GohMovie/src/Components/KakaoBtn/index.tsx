import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  label: string;
  style?: Object;
  onPress?: () => void;
}

const KakaoBtn = ({label, style, onPress}: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label>{label}</Label>
    </StyleButton>
  );
};

export default KakaoBtn;

const StyleButton = Styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #FEE500;
  /* background-color: #FEE500; */
`;

const Label = Styled.Text`
  color: #FEE500;
  font-size: 16px;
`;
