import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import variance from '../../../../../tools/hoc/variance';
import {StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type CustomButtonProps = TouchableOpacityProps & {
  Icon?: FC<SvgProps>;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button: FC<CustomButtonProps> = observer((props) => {
  const {Icon, title, onPress, style, ...rest} = props;
  return (
    <ButtonContainer onPress={onPress} style={style} {...rest}>
      {Icon ? <Icon /> : null}
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
    flexDirection: 'row',
    gap: 8,
  },
}));

const ButtonText = variance(Text)(() => ({
  root: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    borderWidth: 0,
    borderColor: 'transparent',
  },
}));
