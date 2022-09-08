import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import "./css/templateQuestion.css";
import { Button } from "@mui/material";
import Navbar from "../../core/Navbar/Navbar";
import Footer from "../../core/Footer/Footer";
function GenderQuestein() {
  return (
    <>
      <Navbar />
      <div className="gender-questein">
        <h1 className="question-title">What is your Gender?</h1>

        <Link to={"/questionOne"}>
          <button className="quiz-btn">MALE</button>
        </Link>

        <Link to={"/questionOne"}>
          <button className="quiz-btn">FEMALE</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default GenderQuestein;
