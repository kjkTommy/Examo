import { RootStoreProvider } from '@/packages/core/src/Root';
import NavigationRoot from '@/packages/navigation/src/NavigationRoot';
import { useColorScheme } from '@/packages/tools/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <RootStoreProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationRoot />
        <StatusBar style="auto" />
      </ThemeProvider>
    </RootStoreProvider>
  );
}
