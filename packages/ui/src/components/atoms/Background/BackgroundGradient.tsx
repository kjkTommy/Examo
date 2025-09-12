import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {observer} from 'mobx-react-lite';

export type BackgroundGradientProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | React.ReactNode[];
};

export default observer(function BackgroundGradient(props: BackgroundGradientProps) {
  return (
    <LinearGradient
      colors={['#B068F6', '#2E0667', '#000000']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={[styles.background, props.style]}
    >
      {props.children}
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
