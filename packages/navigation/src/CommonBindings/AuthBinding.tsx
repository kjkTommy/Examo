import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {useRoot} from '../../../core/src/Root/Root';
import AuthScreen from '../screens/CommonScreens/AuthScreen';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import variance from '../../../tools/hoc/variance';
import Tutorial from '../screens/LargeScreens/TutorialScreen/Tutorial';
import * as Google from 'expo-auth-session/providers/google';
import {CLIENT_ID} from '../../../constants/variable';

export default observer(function AuthBinding() {
  const {layoutHelperState, oauthService} = useRoot();
  const navigation = useNavigation();
  const isLarge = layoutHelperState.isLarge;

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const {id_token} = response.params;

      oauthService
        .signInWithGoogle(id_token)
        .then((user) => {
          console.log('Google user:', user);
        })
        .catch((err) => console.error('Google sign-in error:', err));
    }
  }, [response]);

  if (isLarge) {
    return (
      <LargeScreenView>
        <Tutorial />
        <AuthScreen request={request} promptAsync={promptAsync} />
      </LargeScreenView>
    );
  } else {
    return <AuthScreen request={request} promptAsync={promptAsync} />;
  }
});

const LargeScreenView = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto',
    flex: 4 / 5,
    gap: 20,
  },
}));
