import LayoutHelperState from './LayoutHelperState/LayoutHelperState';
import WindowDimensionsStore from './WindowDimensions/WindowDimensionsServise';
import OauthService from './OAuth/OauthService';

class RootStore {
  readonly windowDimensionsState: WindowDimensionsStore;
  readonly layoutHelperState: LayoutHelperState;
  readonly oauthService: OauthService;

  constructor() {
    this.windowDimensionsState = new WindowDimensionsStore();
    this.layoutHelperState = new LayoutHelperState(this);
    this.oauthService = new OauthService();
  }
}

export default RootStore;
