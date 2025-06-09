import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';
import SmallHomeStack from './SmallBindings/SmallHomeStack';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default observer(function SmallNavigationRoot() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <NavigationContainer>
        <SmallHomeStack />
      </NavigationContainer>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
