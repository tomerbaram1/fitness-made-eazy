import { configureStore } from "@reduxjs/toolkit";
import OpenLoginSlice from "../reducers/OpenLoginSlice";
import OpenPaymentSlice from "../reducers/OpenLoginSlice";
import OpenMyCartSlice from "../reducers/OpenMyCartSlice";
import OpenRegisterSlice from "../reducers/OpenRegisterSlice";

import SelectedProgramSlice from "../reducers/SelectedProgramSlice";

export const store = configureStore({
  reducer: {
    openLogin: OpenLoginSlice,
    openPayment: OpenPaymentSlice,
    openRegister: OpenRegisterSlice,
    openMyCart: OpenMyCartSlice,
    selectedProgram: SelectedProgramSlice,
  },
});
