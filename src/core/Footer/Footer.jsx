import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section1">
        <br />

        <img src="https://raw.githubusercontent.com/aniskchaou/GYM-FRONTEND-CLIENT/master/screenshots/logo.png" />

        <h3>
          Fitness made easy is a pro natrul bodybulding site, <br />
          studided by experts and scientists all over the world.
        </h3>
        <div className="icon-section">
          <br></br>
          <a href="https://www.instagram.com/">
            <InstagramIcon style={{ color: "white" }} />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon style={{ color: "white" }} />
          </a>
          <a href="https://twitter.com/?lang=en">
            {" "}
            <TwitterIcon style={{ color: "white" }} />
          </a>
          <a href="https://www.youtube.com/">
            <YouTubeIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
      <div className="section1">
        <br></br>
        <br></br>
        <h1 className="footer-headers">PROGRAMS</h1>
        <br></br>
        <p>Training Programs</p>
        <p>Nutrition Plans</p>
      </div>
      <div className="section1">
        <br></br>
        <br></br>
        <h1 className="footer-headers">ABOUT</h1>
        <br></br>
        <p>About Me</p>
        <p>Blog</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="section1">
        <br></br>
        <br></br>
        <h1 className="footer-headers">MY SPONSORS</h1>
        <br></br>
        <p>MacroFactor Diet App</p>
        <p>Mass Research Review</p>
        <p>Rise Gym Gear</p>
        <p>PEScience Supplements</p>
        <p>Neck Flex</p>
      </div>
    </div>
  );
};

export default Footer;
