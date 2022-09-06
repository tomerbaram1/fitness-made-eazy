import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MainButton from "./MainButton";
import "./mainContainer.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function MainContainer() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: 100 }} />
        <div className="container-text">
          <Collapse
            in={checked}
            {...(checked ? { timeout: 2000 } : {})}
            collapsedHeight={50}
          >
            <h1 className="container-header">
              Welcome to <br />
              Our<span className="orange">GYM</span>
            </h1>
            <span className="siteNameText">
              Fitness<span className="colorText">made</span>Eazy
            </span>
            <h2>READY TO TRAIN LIKE A PRO?</h2>
            <h4 className="container-description">
              USING OUR FITNESS APP, YOU WILL LEARN WHATS THE{" "}
              <span className="colorText">BEST WORKOUT </span>
              PLAN <span className="colorText">FOR YOU </span>
            </h4>
          </Collapse>
          <div className="buttons">
            <MainButton name="Our Ready-Workouts"></MainButton>
            <MainButton
              className="btn2"
              name="Create a Workout plan"
            ></MainButton>
          </div>
          <IconButton>
            <ExpandMoreIcon
              sx={{ color: "rgb(242, 163, 5)", fontSize: "5rem" }}
            />
          </IconButton>
        </div>
      </Container>
    </React.Fragment>
  );
}
