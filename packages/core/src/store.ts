import LayoutHelperState from './LayoutHelperState/LayoutHelperState';
import WindowDimensionsStore from './WindowDimensions/WindowDimensionsServise';
import AuthService from './Auth/AuthService';

class RootStore {
  readonly windowDimensionsState: WindowDimensionsStore;
  readonly layoutHelperState: LayoutHelperState;
  readonly authService: AuthService;

  constructor() {
    this.windowDimensionsState = new WindowDimensionsStore();
    this.layoutHelperState = new LayoutHelperState(this);
    this.authService = new AuthService();
  }
}

export default RootStore;
