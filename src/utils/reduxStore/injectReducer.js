import React from 'react';
import { ReactReduxContext } from 'react-redux';

import { createReducer } from './reducer';

export function injectReducerFactory(store) {
  return function injectReducer(key, reducer) {
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    ) {
      return;
    }

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store) {
  return {
    injectReducer: injectReducerFactory(store, true),
  };
}

const useInjectReducer = ({ key, reducer }) => {
  const context = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
