import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const OpenMyCartSlice = createSlice({
  name: "openMyCart",
  initialState,
  reducers: {
    openMyCartFunction: (state) => {
      state.value = true;
    },
    closeMyCartFunction: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMyCartFunction, closeMyCartFunction } =
  OpenMyCartSlice.actions;

export default OpenMyCartSlice.reducer;
