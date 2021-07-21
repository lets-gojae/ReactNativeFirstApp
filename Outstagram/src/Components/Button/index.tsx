import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  label: string;
  style?: Object;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const Button = ({label, style, color, onPress, disabled}: Props) => {
  return (
    <StyledButton style={style} onPress={onPress} disabled={disabled}>
      <Label style={{color: color ? color : '#FFFFFF'}}>{label}</Label>
    </StyledButton>
  );
};

export default Button;

const StyledButton = Styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  /* background-color: #3796EF; */
`;

const Label = Styled.Text`
  color: #FFFFFF;
`;
