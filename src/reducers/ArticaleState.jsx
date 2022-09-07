import { createSlice } from "@reduxjs/toolkit";

export const articaleState = createSlice({
  name: "articale",
  initialState: { value: "" },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = articaleState.actions;
export const selectedArticale = (state) => state.articaleState.value;

export default articaleState.reducer;
