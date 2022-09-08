import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const OpenPaymentSlice = createSlice({
  name: "openPayment",
  initialState,
  reducers: {
    openPay: (state) => {
      state.value = true;
    },
    closePay: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPay, closePay } = OpenPaymentSlice.actions;

export default OpenPaymentSlice.reducer;
