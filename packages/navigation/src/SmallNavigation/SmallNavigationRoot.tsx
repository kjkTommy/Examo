import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';
import SmallHomeStack from './SmallBindings/SmallHomeStack';
import {View, StyleSheet, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackgroundGradient} from '../../../ui/src/components/atoms/Background';

export default observer(function SmallNavigationRoot() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <BackgroundGradient />

      <View style={StyleSheet.absoluteFill}>
        <NavigationContainer>
          <SmallHomeStack />
        </NavigationContainer>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  background: {
    borderRadius: Platform.OS === 'web' ? 0 : 10,
  },
});
