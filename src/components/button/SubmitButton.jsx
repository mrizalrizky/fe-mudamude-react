import { Button, Typography } from "@mui/material";
import React from "react";

const SubmitButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: props.width,
        height: props.height,
        backgroundColor: props.bgColor,
        color: props.textColor,
        borderRadius: "50px",
        textTransform: "none",
      }}
    >
      {props.title}
    </Button>
  );
};

export default SubmitButton;
