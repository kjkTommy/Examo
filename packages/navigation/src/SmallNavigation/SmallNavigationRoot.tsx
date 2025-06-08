import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';
import SmallHomeStack from './SmallBindings/SmallHomeStack';

export default observer(function SmallNavigationRoot() {
  return (
    <NavigationContainer>
      <SmallHomeStack />
    </NavigationContainer>
  );
});
