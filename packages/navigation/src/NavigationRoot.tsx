import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Platform, Text} from 'react-native';
import LargeNavigationRoot from './LargeNavigation/LargeNavigationRoot';
import SmallNavigationRoot from './SmallNavigation/SmallNavigationRoot';
import variance from '../../tools/hoc/variance';

export default observer(function NavigationRoot() {
  const isLarge = Platform.OS === 'web';
  console.log(isLarge);
  return (
    <NavigationRootContainer>
      {isLarge ? <LargeNavigationRoot /> : <SmallNavigationRoot />}
    </NavigationRootContainer>
  );
});

const NavigationRootContainer = variance(View)(() => ({
  root: {
    flex: 1,
    flexBasis: 0,
    minWidth: 0,
    width: '100%',
  },
}));
