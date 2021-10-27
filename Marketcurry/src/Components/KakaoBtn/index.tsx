import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  label: string;
  style?: Object;
  color?: string;
  onPress?: () => void;
}

const KakaoBtn = ({label, style, onPress}: Props) => {
  return (
    <StyledButton style={style} onPress={onPress}>
      <Label>{label}</Label>
    </StyledButton>
  );
};

export default KakaoBtn;

const StyledButton = Styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #F7E600;
`;

const Label = Styled.Text`
  color: #3A1D1D;
`;
