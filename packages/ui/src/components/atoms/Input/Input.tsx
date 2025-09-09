import {observer} from 'mobx-react-lite';
import React from 'react';
import variance from '../../../../../tools/hoc/variance';
import {TextInput, Text, TextInputProps, View} from 'react-native';

export type InputProps = TextInputProps & {
  label: string;
  placeholder: string;
  style?: StyleSheet;
};

const Input = observer((props: InputProps) => {
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <CastomInput {...props} placeholder={props.placeholder} />
    </InputContainer>
  );
});

export default Input;

const CastomInput = variance(TextInput)(() => ({
  root: {
    backgroundColor: '#565656ff',
    width: '100%',
    height: 48,
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'auto',
    color: '#cfcfcfff',
    borderRadius: 10,
    paddingLeft: 10,
  },
  padded: {
    padding: 20,
  },
}));

const InputContainer = variance(View)(() => ({
  root: {
    flex: 1,
  },
}));

const Label = variance(Text)(() => ({
  root: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'auto',
    color: '#000000ff',
  },
}));
