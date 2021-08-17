import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: Object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#242424"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#C3C2C8"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;

const Container = Styled.View`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #D3D3D3;
`;

const InputField = Styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #292929;
`;
