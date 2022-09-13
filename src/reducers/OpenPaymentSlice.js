import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const OpenPaymentSlice = createSlice({
  name: "openPayment",
  initialState,
  reducers: {
    openPaymentFunction: (state) => {
      state.value = true;
    },
    closePaymentFunction: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPaymentFunction, closePaymentFunction } =
  OpenPaymentSlice.actions;

export default OpenPaymentSlice.reducer;
