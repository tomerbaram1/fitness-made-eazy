import { configureStore } from "@reduxjs/toolkit";
import MyCartSlice from "../reducers/MyCartSlice";
import OpenLoginSlice from "../reducers/OpenLoginSlice";
import OpenMyCartSlice from "../reducers/OpenMyCartSlice";
import OpenRegisterSlice from "../reducers/OpenRegisterSlice";
import QuizGradeSlice from "../reducers/QuizGradeSlice";

import SelectedProgramSlice from "../reducers/SelectedProgramSlice";

export const store = configureStore({
  reducer: {
    openLogin: OpenLoginSlice,
    openRegister: OpenRegisterSlice,
    openMyCart: OpenMyCartSlice,
    selectedProgram: SelectedProgramSlice,
    quizGrade: QuizGradeSlice,
    myCart: MyCartSlice,
  },
});
