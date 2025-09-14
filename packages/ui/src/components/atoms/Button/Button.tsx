import {observer} from 'mobx-react-lite';
import React, {FC, ReactNode} from 'react';
import variance from '../../../../../tools/hoc/variance';
import {ButtonProps, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type CustomButtonProps = ButtonProps & {
  Icon?: FC<SvgProps>;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

const Button = observer((props: CustomButtonProps) => {
  const {Icon, title, onPress, style, textStyle} = props;
  return (
    <ButtonContainer onPress={onPress} style={style}>
      {Icon ? <Icon /> : null}
      <ButtonText style={textStyle}>{title}</ButtonText>
    </ButtonContainer>
  );
});

export default Button;

const ButtonContainer = variance(TouchableOpacity)(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
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
    borderWidth: 0,
    borderColor: 'transparent',
  },
}));
