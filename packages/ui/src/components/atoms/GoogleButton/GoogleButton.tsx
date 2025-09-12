import React, {useEffect} from 'react';
import {Button} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {auth} from '../../../../../../firebaseConfig';

export default function GoogleLogin() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '999731956395-5phdu22qursmuvvgvatk77kdm0uai4q5.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const {id_token} = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCred) => {
          console.log('Google user:', userCred.user);
        })
        .catch((err) => console.error(err));
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Войти через Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
