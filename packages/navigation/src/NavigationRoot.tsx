import {observer} from 'mobx-react-lite';
import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import LargeNavigationRoot from './LargeNavigation/LargeNavigationRoot';
import SmallNavigationRoot from './SmallNavigation/SmallNavigationRoot';

export default observer(function NavigationRoot() {
  return (
    <View style={styles.container}>
      <LargeNavigationRoot />
      {/* {isLg ? <LargeNavigationRoot /> : <SmallNavigationRoot />} */}
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
