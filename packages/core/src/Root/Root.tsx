import React, {createContext, ReactNode, useContext} from 'react';
import RootStore from '../store';

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider = ({children}: {children: ReactNode}) => {
  const rootStore = new RootStore();

  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>;
};

export const useRoot = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useRootStore must be used within a RootStoreProvider');
  }
  return store;
};
