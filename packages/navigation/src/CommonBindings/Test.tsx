import {observer} from 'mobx-react-lite';
import React from 'react';
import {useRoot} from '../../../core/src/Root/Root';
import AuthScreen from '../screens/CommonScreens/AuthScreen';
import {useNavigation} from '@react-navigation/native';
import {Platform, View, Text} from 'react-native';
import variance from '../../../tools/hoc/variance';
import Tutorial from '../screens/LargeScreens/TutorialScreen/Tutorial';

export default observer(function TestBinding() {
  const {layoutHelperState} = useRoot();

  return <View style={{backgroundColor: 'red', width: 150, height: 150}}></View>;
});
