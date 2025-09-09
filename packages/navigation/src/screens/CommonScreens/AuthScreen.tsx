import {observer} from 'mobx-react-lite';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import variance from '../../../../tools/hoc/variance';
import Button from '../../../../ui/src/components/atoms/Button/Button';
import DividerWithText from '../../../../ui/src/components/atoms/DividerWithText/DividerWithText';
import {Input} from '../../../../ui/src/components/atoms/Input';

export default observer(function AuthScreen() {
  return (
    <RootContainer>
      <BlockWithText>
        <Title>Sign Up Account</Title>
        <SubTitle>Enter your personal data to create your account.</SubTitle>
      </BlockWithText>
      <ButtonLogin title="Google" onPress={() => {}} />
      <DividerWithText description={'Or'} />
      <FormsContainer>
        <Row>
          <Input placeholder="userName" label="First Name" />
          <Input placeholder="userName" label="First Name" />
        </Row>
        <Input placeholder="userName" label="First Name" />
        <Input placeholder="userName" label="First Name" />
      </FormsContainer>
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
    flex: 1.2,
    padding: 20,
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
}));

const Row = variance(View)(() => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
}));

const FormsContainer = variance(View)(() => ({
  root: {
    paddingBottom: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
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
    maxWidth: 345,
    width: '100%',
  },
}));

const ButtonSignUp = variance(Button)(() => ({
  root: {},
}));

const TouchableText = variance(TouchableOpacity)(() => ({
  root: {},
}));
