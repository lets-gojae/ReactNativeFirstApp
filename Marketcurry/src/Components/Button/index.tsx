import React from 'react';
import Styled from 'styled-components/native';

import {Mixin} from '~/styles/Mixin';

interface Props {
  label: string;
  style?: Object;
  fontWeight?: any;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const Button = ({
  label,
  style,
  color,
  fontWeight,
  disabled,
  onPress,
}: Props) => {
  return (
    <StyleButton style={style} onPress={onPress} disabled={disabled}>
      <Label
        style={{
          color: color ? color : '#FFF',
          fontWeight: fontWeight ? fontWeight : 'normal',
        }}>
        {label}
      </Label>
    </StyleButton>
  );
};

export default Button;

const StyleButton = Styled.TouchableOpacity`
  ${Mixin.flexSet('center', 'center', 'null')};
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border-color: #D3D3D3;

`;

const Label = Styled.Text`
  font-size: 16px;

`;
