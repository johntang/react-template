import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rootApi from '../request';

const globalSlice = createSlice({
  name: 'global',
  initialState: {},
  reducers: {},
});

export const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    global: globalSlice.reducer,
    ...injectedReducers,
  });

  return rootReducer;
};
