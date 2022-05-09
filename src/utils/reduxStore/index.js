/* eslint-disable import/no-import-module-exports */
import { configureStore } from '@reduxjs/toolkit';
import rootApi from '../request';
import preloadedState from './preloadedState';
import { createReducer } from './reducer';

const rootReducer = createReducer();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});

store.injectedReducers = {};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducer', () => store.replaceReducer(rootReducer));
}

export { store };
