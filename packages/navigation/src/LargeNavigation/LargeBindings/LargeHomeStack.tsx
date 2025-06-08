import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import Home from '../../screens/Home';

export default observer(function LargeHomeStack() {
  return (
    <Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Root" component={Home} />
    </Navigator>
  );
});

const {Navigator, Screen} = createStackNavigator();
