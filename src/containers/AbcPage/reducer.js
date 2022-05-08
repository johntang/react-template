/*
 *
 * AbcPage reducer
 *
 */
import { createSlice } from '@reduxjs/toolkit';
import { PAGE_KEY } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const abcPageSlice = createSlice({
  name: PAGE_KEY,
  initialState,
  reducers: {},
});
export default abcPageSlice;
