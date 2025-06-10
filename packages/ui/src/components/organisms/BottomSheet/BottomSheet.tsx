import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text} from 'react-native';
import variance from '../../../../../tools/hoc/variance';

export type BottomSheetProps = {
  children: React.ReactNode;
  index: number;
  height?: string | number;
};

export default observer(function BottomSheet(props: BottomSheetProps) {
  const {children} = props;
  const onChange = () => {};
  return (
    <BottomSheetContainer>
      <Header>
        <Text>Header</Text>
        <DragHandle />
      </Header>
      <MainContent>{children}</MainContent>
    </BottomSheetContainer>
  );
});

const BottomSheetContainer = variance(View)(() => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#a3a3a3',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
}));
const MainContent = variance(View)(() => ({
  root: {
    padding: 16,
  },
}));
const Header = variance(View)(() => ({
  root: {
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
}));
const DragHandle = variance(View)(() => ({
  root: {
    width: '50%',
    backgroundColor: '#0000',
  },
}));
