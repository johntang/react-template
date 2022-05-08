import { createSelector } from '@reduxjs/toolkit';
import { PAGE_KEY } from './constants';
import { initialState } from './reducer';

export const rootStateSelector = () =>
  createSelector(
    (state) => state[PAGE_KEY] || initialState,
    (subState) => subState,
  );
