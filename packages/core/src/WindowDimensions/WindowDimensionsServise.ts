import {Dimensions as RNDimensions, ScaledSize} from 'react-native';
import {makeAutoObservable} from 'mobx';
import type {WindowDimensionsState} from './WindowDimensionsState';

export default class WindowDimensionsStore implements WindowDimensionsState {
  window: ScaledSize = RNDimensions.get('window');
  screen: ScaledSize = RNDimensions.get('screen');

  constructor() {
    makeAutoObservable(this);
    RNDimensions.addEventListener('change', this.handleChange);
  }

  private handleChange = ({window, screen}: {window: ScaledSize; screen: ScaledSize}) => {
    this.window = window;
    this.screen = screen;
  };
}
