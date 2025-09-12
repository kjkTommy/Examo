import {observer} from 'mobx-react-lite';
import React from 'react';
import {useRoot} from '../../../core/src/Root/Root';
import AuthScreen from '../screens/CommonScreens/AuthScreen';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import variance from '../../../tools/hoc/variance';
import Tutorial from '../screens/LargeScreens/TutorialScreen/Tutorial';

export default observer(function AuthBinding() {
  const {layoutHelperState} = useRoot();
  const navigation = useNavigation();
  const isLarge = layoutHelperState.isLarge;
  console.log(isLarge);

  if (isLarge) {
    return (
      <LargeScreenView>
        <Tutorial />
        <AuthScreen />
      </LargeScreenView>
    );
  } else {
    return <AuthScreen />;
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
