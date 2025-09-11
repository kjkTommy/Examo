import type {ScaledSize} from 'react-native';

export type Dimensions = {window: ScaledSize; screen: ScaledSize};

export type WindowDimensionsUpdatesListener = (status: Dimensions) => void;

export interface WindowDimensions {
  readonly updates: WindowDimensionsUpdatesListener;
}
