import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {variance} from '../../../../../tools/hoc';
import React, {useMemo} from 'react';
import {BackgroundGradient} from '../../../../../ui/src/components/atoms/Background';
import {TutorialStep} from './index';

export type TutorialStepType = {
  title: string;
  isActive: boolean;
  order: number;
};

export default observer(function Tutorial() {
  const steps: TutorialStepType[] = useMemo(() => {
    return [
      {
        title: 'Sign up your account',
        isActive: true,
        order: 1,
      },
      {
        title: 'Set up your workspace',
        isActive: false,
        order: 2,
      },
      {
        title: 'Set up your profile',
        isActive: false,
        order: 3,
      },
    ];
  }, []);

  return (
    <RootView>
      <BackgroundGradient />
      <ContainerTutorial>
        <TutorialTitle>Get Started with Examo</TutorialTitle>
        <TutorialDescription numberOfLines={2}>
          Complete these easy steps to register your account
        </TutorialDescription>
        <StepsContainer>
          {steps.map((step, index) => (
            <TutorialStep {...step} key={index} />
          ))}
        </StepsContainer>
      </ContainerTutorial>
    </RootView>
  );
});

const RootView = variance(View)(() => ({
  root: {
    flex: 1.6,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 120,
  },
}));

const StepsContainer = variance(View)(() => ({
  root: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
}));

const ContainerTutorial = variance(View)(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    gap: 12,
  },
}));

const TutorialTitle = variance(Text)(() => ({
  root: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
}));

const TutorialDescription = variance(Text)(() => ({
  root: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
    color: '#B3B3B3',
    textAlign: 'center',
  },
}));
