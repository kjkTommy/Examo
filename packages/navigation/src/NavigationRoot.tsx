import {observer} from 'mobx-react-lite';
import React from 'react';
import {View} from 'react-native';
import LargeNavigationRoot from './LargeNavigation/LargeNavigationRoot';
import SmallNavigationRoot from './SmallNavigation/SmallNavigationRoot';
import variance from '../../tools/hoc/variance';
import {useRoot} from '../../core/src/Root/Root';

export default observer(function NavigationRoot() {
  const {layoutHelperState} = useRoot();
  const isLarge = layoutHelperState.isLarge;
  return (
    <NavigationRootContainer>
      {isLarge ? <LargeNavigationRoot /> : <SmallNavigationRoot />}
    </NavigationRootContainer>
  );
});

const NavigationRootContainer = variance(View)(() => ({
  root: {
    flex: 1,
    width: '100%',
  },
}));
