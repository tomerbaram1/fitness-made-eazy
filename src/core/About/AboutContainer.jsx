import "./aboutContainer.css";
import React from "react";

export default function AboutContainer() {
  return (
    <div className="container">
      <div className="text-img"></div>
      <div className="text">
        <h1 className="text-header">
          The greatest <span className="orange">power</span> is knowledge and
          knowledge is our <span className="orange">power</span>
        </h1>
        <br />

        <p className="text-upper">
          Through his science-based Youtube channel, with over 2 million
          subscribers, Jeff shares the knowledge he has gathered through
          university education and field experience with those who share his
          passion for the science behind building muscle, losing fat, and
          gaining strength. Here are some of his accomplishments:
        </p>
        <br />

        <br />
        <ul className="text-list">
          <li>Mr. Junior Canada for Natural Bodybuilding (2012)</li>
          <li>Overall Champion WNBF Natural Muscle Mayhem (2014)</li>
          <li>
            Canadian National Powerlifting championships 2014: 502 lb squat, 336
            lb bench
          </li>
          <li>press, 518 lb deadlift (2nd place)</li>
          <li>
            10+ years of coaching experience at the provincial, national, world,
            and professional
          </li>
          <li>level for physique and strength sports</li>
        </ul>
        <br />
        <p className="text-footer">
          Jeff currently lives in Ontario, Canada, where he is producing YouTube
          videos and programs for people around the world.
        </p>
      </div>
    </div>
  );
}
