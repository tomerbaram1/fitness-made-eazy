import React from "react";
import videoBg from "../Main/fitnessVideo.mp4";
import "./main.css";
import MainContainer from "./MainContainer";

const Main = () => {
  return (
    <section className="main-container">
      <div className="mainOverlay"></div>
      <video className="mainVideo" src={videoBg} autoPlay loop muted />
      <MainContainer />
    </section>
  );
};

export default Main;
