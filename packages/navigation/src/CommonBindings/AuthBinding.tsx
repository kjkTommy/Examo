import {observer} from 'mobx-react-lite';
import React from 'react';
import {useRoot} from '../../../core/src/Root/Root';
import AuthScreen from '../screens/CommonScreens/AuthScreen';
import {useNavigation} from '@react-navigation/native';
import {Platform, View, Text} from 'react-native';
import variance from '../../../tools/hoc/variance';
import Tutorial from '../screens/LargeScreens/TutorialScreen/Tutorial';

export default observer(function AuthBinding() {
  const {layoutHelperState} = useRoot();
  const navigation = useNavigation();
  const isLarge = layoutHelperState.isLarge;

  if (isLarge) {
    return (
      <LargeScreenView>
        <Tutorial />
        <AuthScreen />
      </LargeScreenView>
    );
  } else {
    <AuthScreen />;
  }
});

const LargeScreenView = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'center',
    margin: 'auto',
    flex: 4 / 5,
  },
}));
