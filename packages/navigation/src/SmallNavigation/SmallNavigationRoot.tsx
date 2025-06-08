import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';

export default observer(function SmallNavigationRoot() {
  return (
    <View>
      <Text>SmallNavigationRoot</Text>
    </View>
  );
});
