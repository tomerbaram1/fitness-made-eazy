import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import "./mainContainer.css";
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
            collapsedheight={50}
          >
            <h1 className="container-header">
              Welcome to <br />
              <span className="siteNameText">
                Fitness<span className="colorText">made</span>Eazy
              </span>
            </h1>

            <h2>READY TO TRAIN LIKE A PRO?</h2>
            <h4 className="container-description">
              USING OUR FITNESS APP, YOU WILL LEARN WHATS THE{" "}
              <span className="colorText">BEST WORKOUT </span>
              PLAN <span className="colorText">FOR YOU </span>
            </h4>
          </Collapse>
          <div className="buttons">
            <Link to="programs">
              <MainButton name="Our Ready-Workouts"></MainButton>
            </Link>
            <Link to="genderquestion">
              <MainButton
                className="btn2"
                name="Create a Workout plan"
              ></MainButton>
            </Link>
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
