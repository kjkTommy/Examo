import {observer} from 'mobx-react-lite';
import React from 'react';
import {useRoot} from '../../../core/src/Root/Root';
import AuthScreen from '../screens/CommonScreens/AuthScreen';
import {useNavigation} from '@react-navigation/native';

export default observer(function AuthBinding() {
  const {} = useRoot();
  const navigation = useNavigation();

  return <AuthScreen />;
});
