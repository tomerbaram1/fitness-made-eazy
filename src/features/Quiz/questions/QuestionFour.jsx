import QuizButton from "../QuizButton";
import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import QuizTemplate from "../QuizTemplate";
import Navbar from "../../../core/Navbar/Navbar";
import Footer from "../../../core/Footer/Footer";
function QuestionFour() {
  const questions = [
    { text: "Improve my Strength + Muscle" },
    { text: "Improve my Strength" },
    { text: "Grow Big Muscles" },
    { text: "Lose Weight" },
    { text: "Keep A Healthy Lifestyle" },
  ];
  return (
    <div>
      <Navbar />
      <QuizTemplate
        title="What best matches your primary goal? "
        questions={questions}
        buttonLinkTo={"/QuestionFive"}
      />
      <Footer />
    </div>
  );
}

export default QuestionFour;
