import React from "react";

function QuizButton(props) {
  return (
    <div>
      <button type="submit" className="quiz-btn" onClick={props.handleClick}>
        SUBMIT
      </button>
    </div>
  );
}

export default QuizButton;
