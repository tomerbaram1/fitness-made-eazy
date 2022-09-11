import "./App.css";
import Home from "./features/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Programs } from "./features/Programs/Programs";
import Learn from "./features/Learn/Learn";
import { useEffect } from "react";
import AboutImage from "./core/About/AboutImage";
import GenderQuestein from "./features/Quiz/GenderQuestein";
import QuestionOne from "./features/Quiz/questions/QuestionOne";
import QuestionTwo from "./features/Quiz/questions/QuestionTwo";
import QuestionThree from "./features/Quiz/questions/QuestionThree";
import QuestionFour from "./features/Quiz/questions/QuestionFour";
import QuestionFive from "./features/Quiz/questions/QuestionFive";
import QuizAnswer from "./features/Quiz/QuizAnswer";

import About from "./core/About/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Programs" element={<Programs></Programs>}></Route>
        <Route path="/Learn" element={<Learn></Learn>}></Route>
        <Route
          path="/genderquestion"
          element={<GenderQuestein></GenderQuestein>}
        ></Route>
        <Route
          path="/questionOne"
          element={<QuestionOne></QuestionOne>}
        ></Route>
        <Route
          path="/questionTwo"
          element={<QuestionTwo></QuestionTwo>}
        ></Route>
        <Route
          path="/questionthree"
          element={<QuestionThree></QuestionThree>}
        ></Route>
        <Route
          path="/questionFour"
          element={<QuestionFour></QuestionFour>}
        ></Route>
        <Route
          path="/questionFive"
          element={<QuestionFive></QuestionFive>}
        ></Route>
        <Route path="/quizAnswer" element={<QuizAnswer></QuizAnswer>}></Route>
        <Route path="/AboutUs" element={<About/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
