import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {useRoot} from '../../../core/src/Root/Root';
import AuthScreen from '../screens/CommonScreens/AuthScreen';
import {useNavigation} from '@react-navigation/native';
import {Platform, View} from 'react-native';
import variance from '../../../tools/hoc/variance';
import Tutorial from '../screens/LargeScreens/TutorialScreen/Tutorial';
import * as Google from 'expo-auth-session/providers/google';
import {makeRedirectUri} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import {CLIENT_ID} from '../../../constants/variables';

WebBrowser.maybeCompleteAuthSession();

export default observer(function AuthBinding() {
  const {layoutHelperState, authService} = useRoot();
  const navigation = useNavigation();
  const isLarge = layoutHelperState.isLarge;
  const redirectUri = makeRedirectUri({useProxy: true} as any);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID,
    redirectUri,
  });

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.idToken) {
      const idToken = response.authentication.idToken;
      authService
        .signInWithGoogle(idToken)
        .then((user) => console.log('User signed in', user))
        .catch((err) => alert('Ошибка входа: ' + err.message));
    }
  }, [response]);

  useEffect(() => {
    console.log('Current user:', authService.getCurrentUser());
  }, []);

  console.log('Current user:', authService.getCurrentUser());

  const handleGoogleLogin = async () => {
    if (Platform.OS === 'web') {
      try {
        const user = await authService.signInWithGoogle();
        console.log('User signed in (web):', user);
      } catch (err: any) {
        alert('Ошибка входа: ' + err.message);
      }
    } else {
      promptAsync();
    }
  };

  if (isLarge) {
    return (
      <LargeScreenView>
        <Tutorial />
        <AuthScreen handleGoogleLogin={handleGoogleLogin} />
      </LargeScreenView>
    );
  } else {
    return <AuthScreen handleGoogleLogin={handleGoogleLogin} />;
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
