import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  QuizGrade: {
    IsWoman: false,
    Grade: 0,
  },
};

export const QuizGradeSlice = createSlice({
  name: "quizGrade",
  initialState,
  reducers: {
    setIsWomanTrue: (state) => {
      state.QuizGrade.IsWoman = true;
    },
    setIsWomanFalse: (state) => {
      state.QuizGrade.IsWoman = false;
    },
    addToGrade: (state, action) => {
      state.QuizGrade.Grade = state.QuizGrade.Grade + action.payload;
    },
    removeFromGrade: (state, action) => {
      state.QuizGrade.Grade = state.QuizGrade.Grade - action.payload;
    },
    resetGrade: (state) => {
      state.QuizGrade.Grade = 0;
      state.QuizGrade.IsWoman = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsWomanFalse,
  setIsWomanTrue,
  addToGrade,
  removeFromGrade,
  resetGrade,
} = QuizGradeSlice.actions;

export default QuizGradeSlice.reducer;
