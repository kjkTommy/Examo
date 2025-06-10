import {observer} from 'mobx-react-lite';
import React, {ReactNode} from 'react';
import variance from '../../../../../tools/hoc/variance';
import {ButtonProps, Text, TouchableOpacity} from 'react-native';

export type CustomButtonProps = ButtonProps & {
  Icon?: ReactNode;
  title: string;
  onPress: () => void;
};

const Button = observer((props: CustomButtonProps) => {
  const {Icon, title, onPress} = props;
  return (
    <ButtonContainer onPress={onPress}>
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
    paddingTop: 24,
    paddingBottom: 24,
  },
}));

const ButtonText = variance(Text)(() => ({
  root: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 18,
  },
}));
