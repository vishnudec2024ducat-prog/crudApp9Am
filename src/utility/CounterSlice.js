import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
    method: "Default",
  },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
      state.method = action.payload;
    },
    decrement: (state, action) => {
      state.count -= 1;
      state.method = action.payload;
    },

    reset: (state, action) => {
      state.count = 0;
      state.method = action.payload;
    },
  },
});

export const { increment, decrement,reset } = CounterSlice.actions;
export default CounterSlice.reducer