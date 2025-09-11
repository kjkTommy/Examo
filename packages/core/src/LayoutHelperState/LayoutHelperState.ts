import {computed} from 'mobx';
import {MD_BREAKPOINT} from '../../../constants/breakpoints';
import RootStore from '../store';

export default class LayoutHelperState {
  constructor(private readonly _root: RootStore) {}

  @computed get isLarge() {
    return this._root.windowDimensionsState.window.width >= MD_BREAKPOINT;
  }
}
