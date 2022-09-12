import React from "react";
import Template from "./Template";
import "./aboutMain.css";

const AboutMain = (props) => {
  return (
    <div className="about-box">
      {/* <Info
        className="aboutTitleContainer"
        header="OUR VALUES"
        secondPar="For 20 years helping customers reach their fitness goals has been at the heart of what we do and why we do it! We live and breathe our six core values and four brand promises  — which speak of our commitment to our customers, staff, the industry and our business as a whole. "
      /> */}
      <div className="aboutTitleContainer">
        <h3>
          For 20 years helping customers reach their fitness goals has been at
          the heart of what we do and why we do it! We live and breathe our six
          core values and four brand promises — which speak of our commitment to
          our customers, staff, the industry and our business as a whole.{" "}
        </h3>
      </div>
      <hr className="aboutHR"></hr>
      <div className="values-container">
        <Template
          img="https://i.shgcdn.com/569b91b1-8706-4d23-ba57-18a79e32ae6c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          title="Customer Service"
          par="Customers are why we exist and we’re passionate about delivering exceptional, personalised customer service to all."
        />
        <Template
          img="https://i.shgcdn.com/e7cd6b6f-a9c7-41a8-9fdd-ef8c1159041e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          title="Customer Service"
          par="Customers are why we exist and we’re passionate about delivering exceptional, personalised customer service to all."
        />
        <Template
          img="https://i.shgcdn.com/d9d5f766-bf6b-42ac-a437-62f2b2b1a42b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          title="Teamwork"
          par="We’re committed to common goals, with effective communication and accountability making our team achieve greater results."
        />
        <Template
          img="https://i.shgcdn.com/6378f5a8-a296-417a-9089-ae90fa0f01d1/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          title="'Nimbagility'"
          par="Invented by our company directors, Nimbagility reflects the ability to remain nimble and agile through lean, efficient actions."
        />
        <Template
          img="https://i.shgcdn.com/ed940ba6-1ae1-4436-bb1b-08b0e7bd62fd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          title="Be the change you seek"
          par="We believe we should all take ownership and have the courage to lead change, creating a better experience for our people and the customers we serve."
        />
        <Template
          img="https://i.shgcdn.com/029c70cf-393c-4fed-8f4b-ea7e5322b8aa/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          title="Innovation"
          par="To help turn our ideas into reality, we embrace a culture of creative innovation in our people, processes and products."
        />
      </div>
      <hr className="aboutHR"></hr>
    </div>
  );
};

export default AboutMain;
