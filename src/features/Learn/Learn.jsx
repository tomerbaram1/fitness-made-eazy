import React from "react";
import "./learn.css";
import Navbar from "../../core/Navbar/Navbar";
import ActionAreaCard from "./LearnCard";

const Learn = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="learn-container-background">
        <div className="overlay">
          <div className="learn-container">
            <div className="learn-img-container">
              <div className="img-overlay"></div>
              <h4>intermidate advance</h4>
              <h1>
                PUSH <br /> PULL
                <br /> LEGS{" "}
              </h1>
              <div className="paragraph-section">
                <h4>hypertrophy program</h4>
              </div>
            </div>
            <div className="button-header">
              <h1>
                Buy one <br /> and get{" "}
                <span style={{ color: "orange" }}>one free</span>
              </h1>
              <button className="button-42" role="button">
                <h3>BUY NOW</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section2-container">
        <h3>
          Jeff Nippard’s Push Pull Legs Program is designed for intermediate to
          advanced lifters looking to take their muscle and strength goals to
          the next level
        </h3>
        <h1 style={{ color: "orange" }}>
          WHY IS THIS PROGRAM BETTER THAN OTHER <br /> PUSH PULL LEGS PROGRAMS?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
          voluptas doloribus. Voluptatum libero modi rem veritatis possimus
          laboriosam, veniam non ducimus, voluptatibus quibusdam expedita in
          repellendus praesentium pariatur culpa.
        </p>
      </div>
      <div className="card-container1">
        <ActionAreaCard title={""} text={""} />
      </div>
    </div>
  );
};

export default Learn;
