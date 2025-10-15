import {observer} from 'mobx-react-lite';
import React from 'react';
import {Text, View} from 'react-native';
import variance from '../../../../tools/hoc/variance';
import Button from '../../../../ui/src/components/atoms/Button/Button';
import DividerWithText from '../../../../ui/src/components/atoms/DividerWithText/DividerWithText';
import {sized} from '../../../../tools/hooks/sized';
import {AppleSvg, GooglSvg} from '../../../../static/assets/icons';
import {AuthRequest, AuthRequestPromptOptions, AuthSessionResult} from 'expo-auth-session';

export type AuthScreenProps = {
  request: AuthRequest | null;
  promptAsync: (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>;
};

export default observer(function AuthScreen(props: AuthScreenProps) {
  const {request, promptAsync} = props;
  return (
    <RootContainer>
      <BlockWithText>
        <Title>Sign Up Account</Title>
        <SubTitle>Enter your personal data to create your account.</SubTitle>
      </BlockWithText>
      <Row>
        <ButtonLogin
          title="Google"
          Icon={GoogleIcon}
          onPress={() => promptAsync({useProxy: true, showInRecents: true} as any)}
          disabled={!request}
        />
        <ButtonLogin title="Apple" Icon={AppleIcon} onPress={() => {}} />
      </Row>
      <DividerWithText description={'Or'} />
      <ButtonSignUp title="Sign In" onPress={() => {}} />
    </RootContainer>
  );
});

const GoogleIcon = sized(GooglSvg, 16);
const AppleIcon = sized(AppleSvg, 16);

const RootContainer = variance(View)(() => ({
  root: {
    flex: 2,
    padding: 20,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
}));

const Row = variance(View)(() => ({
  root: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 20,
    justifyContent: 'space-between',
  },
}));

const BlockWithText = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Title = variance(Text)(() => ({
  root: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
}));

const SubTitle = variance(Text)(() => ({
  root: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    color: '#B3B3B3',
    textAlign: 'center',
  },
}));

const ButtonLogin = variance(Button)(() => ({
  root: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 20,
    flex: 1,
    // width: '100%',
    color: '#ffffff',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9e9e9e',
  },
}));

const ButtonSignUp = variance(Button)(() => ({
  root: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 20,
    width: '100%',
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
}));
