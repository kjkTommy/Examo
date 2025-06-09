import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import Home from '../../screens/SmallScreens/Home';
import HomeLarge from '../../screens/LargeScreens/HomeLarge';

export default observer(function LargeHomeStack() {
  return (
    <Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Root" component={HomeLarge} />
    </Navigator>
  );
});

const {Navigator, Screen} = createStackNavigator();
