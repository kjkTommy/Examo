import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';
import LargeHomeStack from './LargeBindings/LargeHomeStack';
import Home from '../screens/Home';

export default observer(function LargeNavigationRoot() {
  return (
    <NavigationContainer>
      <LargeHomeStack />
    </NavigationContainer>
  );
});
