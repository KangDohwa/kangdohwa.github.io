import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
};

const glamourSlice = createSlice({
  name: "glamour",
  initialState,
  reducers: {
    setGlamour(state, action) {
      state.array = action.payload;
      console.log("Console", action.payload);
    },
  },
});

export const { setGlamour } = glamourSlice.actions;

export default glamourSlice;