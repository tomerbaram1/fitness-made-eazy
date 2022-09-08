
import React from "react";
import QuizTemplate from "../QuizTemplate";
import QuizButton from '../QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";

function QuestionThree(props) {
  return (
  
    <div>
      <QuizTemplate
        title="Training History"
        question={[
          { text: "No History (never trained beofore)" },
          { text: "Minimal" },
          { text: "Average training" },
          { text: "Active (active exercise routine)" },
          { text: "Very active" },
        ]}
      />
       <Link to={"/questionFour"}><QuizButton /></Link>
    </div>
  );

}

export default QuestionThree;
