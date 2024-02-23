import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  //name of the slice
  name: 'counter',
  //set initial value
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => state * 0,
    set: (state, action) => action.payload,
  },
});

export const { increment, decrement, reset, set } = counterSlice.actions;

export default counterSlice.reducer;
