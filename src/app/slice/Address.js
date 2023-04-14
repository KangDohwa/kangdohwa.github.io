import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "address test",
  value: 0,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress(state, action) {
      state.address = action.payload;
    },
    up(state, action) {
      state.value += action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;
export const { up } = addressSlice.actions;

export default addressSlice;