import LayoutHelperState from './LayoutHelperState/LayoutHelperState';
import WindowDimensionsStore from './WindowDimensions/WindowDimensionsServise';

class RootStore {
  readonly windowDimensionsState: WindowDimensionsStore;
  readonly layoutHelperState: LayoutHelperState;

  constructor() {
    this.windowDimensionsState = new WindowDimensionsStore();
    this.layoutHelperState = new LayoutHelperState(this);
  }
}

export default RootStore;
