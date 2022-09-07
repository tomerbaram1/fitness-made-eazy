import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function ActionAreaCard(props) {
  switch (props) {
    case "Power Lifting":
      props.title = "Power Lifting";
      props.text = "sdgsgf";

      break;
    case "Calisthenics":
      props.title = "Calisthenics";
      props.text = "ffgdfgfgfg";
      break;
    case "Fundementals":
      break;
    case "Women's Specialization Program":
      break;
    case "Full Body Workout":
      break;
    case "Lower Body Workout":
      break;

    default:
      break;
  }
  return (
    <Card style={{ height: 400 }} sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
