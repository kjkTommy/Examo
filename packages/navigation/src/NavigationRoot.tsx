import LargeNavigationRoot from '@/packages/navigation/src/LargeNavigation/LargeNavigationRoot';
import SmallNavigationRoot from '@/packages/navigation/src/SmallNavigation/SmallNavigationRoot';
import { Stack } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Dimensions } from 'react-native';

export default observer(function NavigationRoot() {
  const isLg = Dimensions.get('screen').width > 1024;

  return (
    <Stack>
      {isLg ? <LargeNavigationRoot /> : <SmallNavigationRoot />}
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
});
