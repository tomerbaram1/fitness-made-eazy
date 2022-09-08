
import QuizButton from './QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function GenderQuestein() {
  return (
    <div className="gender-questein">
      <h1>What is your Gender?</h1>
            <Link to={"/questionOne"}><QuizButton />Male</Link>
            <Link to={"/questionOne"}><QuizButton />Female</Link>
    </div>
  );


export default GenderQuestein;
