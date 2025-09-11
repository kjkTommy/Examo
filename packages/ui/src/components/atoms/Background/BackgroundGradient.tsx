import React from 'react';
import {StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {observer} from 'mobx-react-lite';

export default observer(function BackgroundGradient() {
  return (
    <LinearGradient
      colors={['#B068F6', '#2E0667', '#000000']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={[styles.background]}
    ></LinearGradient>
  );
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 30,
    ...StyleSheet.absoluteFillObject,
  },
});
