import {observer} from 'mobx-react-lite';
import React, {ReactNode} from 'react';
import variance from '../../../../../tools/hoc/variance';
import {ButtonProps, StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';

export type CustomButtonProps = ButtonProps & {
  Icon?: ReactNode;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button = observer((props: CustomButtonProps) => {
  const {Icon, title, onPress, style} = props;
  return (
    <ButtonContainer onPress={onPress} style={style}>
      {Icon ? Icon : null}
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
});

export default Button;

const ButtonContainer = variance(TouchableOpacity)(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#1A1819',
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

const ButtonText = variance(Text)(() => ({
  root: {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 16,
  },
}));
