import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card style={{ height: 400 }} sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1 className="cardTitle">{props.title}</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 className="cardText">{props.text}</h3> <br />
            <h5 className="cardText">{props.text2}</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
