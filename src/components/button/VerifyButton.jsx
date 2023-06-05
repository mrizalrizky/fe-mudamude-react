import { Box, Button } from "@mui/material";
import React from "react";

export default function VerifyButton({ onClick }) {
  return (
    <Button
      component="div"
      sx={{
        backgroundColor: "#0e185f",
        color: "white",
        textTransform: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25em",
        paddingX: "1.5em",
        borderRadius: 5,
        marginX: "0.75em",
        marginY: "1em",
        "&:hover": {
          backgroundColor: "#0e185f",
          color: "white",
        },
      }}
      onClick={onClick}
    >
      Verify
    </Button>
  );
}
