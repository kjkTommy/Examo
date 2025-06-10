import {observer} from 'mobx-react-lite';
import React from 'react';
import {View} from 'react-native';
import variance from '../../../../../tools/hoc/variance';

export default observer(function Modal() {
  return <></>;
});

const RootContainer = variance(View)(() => ({
  root: {
    flex: 1,
  },
}));
