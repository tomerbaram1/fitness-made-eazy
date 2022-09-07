import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const OpenLoginSlice = createSlice({
  name: "openLogin",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = OpenLoginSlice.actions;

export default OpenLoginSlice.reducer;
