import React from "react";
import { Button } from "@mui/material";

export default function AuthSubmitButton({ bgColor, children, onClick }) {
  return (
    <Button
      sx={{
        width: 250,
        height: 45,
        borderRadius: 20,
        backgroundColor: bgColor ? bgColor : "#0e185f",
        color: bgColor ? "#0e185f" : "white",
        textTransform: "none",
        "&:hover": {
          backgroundColor: bgColor ? bgColor : "#0e185f",
          color: bgColor ? "#0e185f" : "white",
        },
      }}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </Button>
  );
}
