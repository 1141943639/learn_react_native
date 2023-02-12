import { createSlice } from '@reduxjs/toolkit';
import { isFunction } from 'lodash';

export const globalEventSlice = createSlice({
  name: 'globalEvent',
  initialState: {
    event: {},
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { addGlobalEvent, removeGlobalEvent, execQueue } = globalEventSlice.actions;

export default globalEventSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state) => state.globalEvent;
