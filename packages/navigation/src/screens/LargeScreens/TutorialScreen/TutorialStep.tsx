import {variance} from '../../../../../tools/hoc';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import {TutorialStepType} from './Tutorial';
import React from 'react';

export default observer(function TutorialStep(props: TutorialStepType) {
  return (
    <StepContainer active={props.isActive}>
      <OrderBackground active={props.isActive}>
        <StepNumber active={props.isActive}>{props.order}</StepNumber>
      </OrderBackground>
      <StepTitle active={props.isActive}>{props.title}</StepTitle>
    </StepContainer>
  );
});

export const StepContainer = variance(View)(() => ({
  root: {
    backgroundColor: '#232323',
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },
  active: {
    backgroundColor: '#FFFFFF',
  },
}));

export const StepTitle = variance(Text)(() => ({
  root: {
    color: '#B3B3B3',
  },
  active: {
    color: '#000000',
  },
}));

export const StepNumber = variance(Text)(() => ({
  root: {
    color: '#d3caca',
  },
  active: {
    borderRadius: 100,
    textAlign: 'center',
    color: '#FFFFFF',
  },
}));

export const OrderBackground = variance(View)(() => ({
  root: {
    backgroundColor: 'rgba(179,179,179,0.55)',
    borderRadius: 100,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#000000',
    borderRadius: 100,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
