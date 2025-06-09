import {observer} from 'mobx-react-lite';
import React from 'react';
import variance from '../../../../../tools/hoc/variance';
import {TextInput, TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {};

const Input = observer((props: InputProps) => {
  return <CastomInput {...props} />;
});

export default Input;

const CastomInput = variance(TextInput)(() => ({
  root: {
    backgroundColor: 'lightgray',
  },
  padded: {
    padding: 20,
  },
}));
