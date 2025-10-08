
import { createSlice } from '@reduxjs/toolkit';

let counterSlice = createSlice ({
  name: 'counter',
  initialState: {count: 0},
  reducers: {
    increment: state => {
      state.count + 1;
    },
    decrement: state => {
      state.count - 1;
    },
    reset: state => {
      0;
    },
  },
});

export let {increment,decrement,reset} = counterSlice.actions

export default counterSlice.reducer
