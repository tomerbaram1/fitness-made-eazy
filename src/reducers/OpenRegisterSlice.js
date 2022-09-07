import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const OpenRegisterSlice = createSlice({
  name: "openRegister",
  initialState,
  reducers: {
    openRegisterFunction: (state) => {
      state.value = true;
    },
    closeRegisterFunction: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openRegisterFunction, closeRegisterFunction } =
  OpenRegisterSlice.actions;

export default OpenRegisterSlice.reducer;
