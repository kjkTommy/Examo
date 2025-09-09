import {observer} from 'mobx-react-lite';
import {View} from 'react-native';
import {variance} from '../../../../../tools/hoc';
import React from 'react';
import {MainBackground} from '../../../../../../assets/picture';

export default observer(function Tutorial() {
  return (
    <RootView>
      <MainBackground width="100%" height="100%" />
      <ContainerTutorial>{/* Тут твой UI */}</ContainerTutorial>
    </RootView>
  );
});

const RootView = variance(View)(() => ({
  root: {
    flex: 1.6,
    borderRadius: 20,
    overflow: 'hidden',
  },
}));

const ContainerTutorial = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
