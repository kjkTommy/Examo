import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStoreProvider} from './packages/core/src/Root/Root';
import React from 'react';
import NavigationRoot from './packages/navigation/src/NavigationRoot';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <RootStoreProvider>
          <StatusBar style="light" />
          <NavigationRoot />
        </RootStoreProvider>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
  },
});
