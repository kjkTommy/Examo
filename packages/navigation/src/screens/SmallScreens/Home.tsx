import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text} from 'react-native';
import variance from '../../../../tools/hoc/variance';

export default observer(function HomeSmall() {
  return (
    <RootContainer>
      <TextContainer>
        <Text>123</Text>
      </TextContainer>
    </RootContainer>
  );
});

const RootContainer = variance(View)(() => ({
  root: {
    display: 'flex',
    flex: 1,
    padding: 16,
  },
}));

const TextContainer = variance(View)(() => ({
  root: {
    backgroundColor: 'red',
    flex: 1,
  },
}));
