import { createSlice } from '@reduxjs/toolkit';
import { PAGE_KEY } from './constants';

const initialState = { posts: [] };

const homeSlice = createSlice({
  name: PAGE_KEY,
  initialState,
  reducers: {
    createPost(state, action) {
      state.posts.push(action.payload);
    },
  },
});

export { initialState };

export default homeSlice;
