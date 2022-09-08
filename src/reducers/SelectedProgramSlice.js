import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Power Lifting",
};

export const SelectedProgramSlice = createSlice({
  name: "selectedProgram",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = "";
    },
  },
});

export const { change, reset } = SelectedProgramSlice.actions;

export default SelectedProgramSlice.reducer;
