import { configureStore, createSlice } from "@reduxjs/toolkit";
import CounterSlice from "../reducers/ArticaleState";

export default configureStore({
  reducer: {
    articale: CounterSlice,
  },
});
