
import React from "react";
import React, { useState } from "react";
import QuizTemplate from "../QuizTemplate";
import QuizButton from '../QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";

function QuestionTwo(props) {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="bmi-questein">
      <QuizTemplate
        title="What is your BMI?"
        question={[
          { text: "Less then 18.5" },
          { text: "18.5-24.9" },
          { text: "24.9-30" },
          { text: "30-34.9" },
          { text: "35+" },
        ]}
      />
       <Link to={"/questionthree"}><QuizButton /></Link>
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <input
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="height in cm"
        />
        <input
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight in kg"
        />
        <button onClick={handleBmi}>Calculate</button>
        <h1>{bmi}</h1>
        <h2>{info}</h2>
      </div>
    </div>
  );

}

