import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text} from 'react-native';
import variance from '../../../../tools/hoc/variance';

export default observer(function HomeLarge() {
  return (
    <RootContainer>
      <TextContainer>
        <Title>Home Large Screen</Title>
      </TextContainer>
    </RootContainer>
  );
});

const RootContainer = variance(View)(() => ({
  root: {
    display: 'flex',
    flex: 1,
  },
}));

const TextContainer = variance(View)(() => ({
  root: {
    backgroundColor: 'green',
    flex: 1,
  },
}));

const Title = variance(Text)(() => ({
  root: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'center',
  },
}));
