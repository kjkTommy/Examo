import {observer} from 'mobx-react-lite';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import variance from '../../../../tools/hoc/variance';
import Button from '../../../../ui/src/components/atoms/Button/Button';
import DividerWithText from '../../../../ui/src/components/atoms/DividerWithText/DividerWithText';

export default observer(function AuthScreen() {
  return (
    <RootContainer>
      <BlockWithText>
        <Title>Sign Up Account</Title>
        <SubTitle>Enter your personal data to create your account.</SubTitle>
      </BlockWithText>
      <ButtonLogin title="Google" onPress={() => {}} />
      <DividerWithText description={'Or'} />
      <FormsContainer></FormsContainer>
      <ButtonSignUp title="Sign Up" onPress={() => {}} />
      <CointainerWithlink>
        <Description>Already have an account?</Description>
        <TouchableText>
          <TextToLogin>Log in</TextToLogin>
        </TouchableText>
      </CointainerWithlink>
    </RootContainer>
  );
});

const RootContainer = variance(View)(() => ({
  root: {
    padding: 20,
  },
}));

const FormsContainer = variance(View)(() => ({
  root: {},
}));

const BlockWithText = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CointainerWithlink = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
  },
}));

const Title = variance(Text)(() => ({
  root: {},
}));

const SubTitle = variance(Text)(() => ({
  root: {},
}));

const TextToLogin = variance(Text)(() => ({
  root: {},
}));

const Description = variance(Text)(() => ({
  root: {},
}));

const ButtonLogin = variance(Button)(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'red',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 48,
    paddingLeft: 48,
  },
}));

const ButtonSignUp = variance(Button)(() => ({
  root: {},
}));

const TouchableText = variance(TouchableOpacity)(() => ({
  root: {},
}));
