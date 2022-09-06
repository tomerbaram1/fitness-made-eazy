import "./main.css";
import React from "react";
import MainContainer from "./MainContainer";
import videoBg from "../Main/fitnessVideo.mp4";

const Main = () => {
  return (
    <section className="main-container">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <MainContainer />
    </section>
  );
};

export default Main;
