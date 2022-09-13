import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";
import "./mainContainer.css";

export default function BasicButtons({ name }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className="btn">
        {name}
      </Button>
    </Stack>
  );
}
