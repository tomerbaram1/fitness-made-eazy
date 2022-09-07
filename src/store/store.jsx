import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../reducers/ArticaleState";
import OpenLoginSlice from "../reducers/OpenLoginSlice";

export const store = configureStore({
  reducer: {
    openLogin: OpenLoginSlice,
  },
});
