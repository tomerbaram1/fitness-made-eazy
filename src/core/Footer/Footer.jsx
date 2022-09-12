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
        <div className="footerlogo">
          <img
            alt="logo"
            src="data:image/png;base64,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"
          />
          <span>
            <h1 style={{ color: "orange" }}>FITNESS MADE EAZY</h1>
          </span>
        </div>
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
      <div className="footer-img">
        <img
          alt="footer"
          src="https://raw.githubusercontent.com/aniskchaou/GYM-FRONTEND-CLIENT/master/screenshots/logo.png"
        />
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
