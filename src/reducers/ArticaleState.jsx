import { createSlice } from "@reduxjs/toolkit";

export const articaleState = createSlice({
  name: "articale",
  initialState: { value: "" },
  reducers: {
    change: (state, payload) => {
      state.value = payload.value;
    },
  },
});

export const { change } = articaleState.actions;
export const selectedArticale = (state) => state.articaleState.value;

export default articaleState.reducer;
