import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionFour() {
  return (
    <div>
      <QuizTemplate
        title="What best matches your primary goal? (it’s okay if you have other goals too)"
        question={[
          { text: "Improve my Strength + Muscle" },
          { text: "Improve my Strength" },
          { text: "Grow Big Muscles" },
          { text: "Lose Weight" },
          { text: "Keep A Healthy Lifestyle" },
        ]}
      />
    </div>
  );
}

export default QuestionFour;
