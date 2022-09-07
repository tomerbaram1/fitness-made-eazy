import { configureStore } from "@reduxjs/toolkit";
import OpenLoginSlice from "../reducers/OpenLoginSlice";
import SelectedProgramSlice from "../reducers/SelectedProgramSlice";

export const store = configureStore({
  reducer: {
    openLogin: OpenLoginSlice,
    selectedProgram: SelectedProgramSlice,
  },
});
