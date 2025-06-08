import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default observer(function Home() {
  console.log('Home отрендерился');
  return (
    <View style={styles.container}>
      <Text>123</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});
