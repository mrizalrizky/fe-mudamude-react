import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  width: 250,
  height: 45,
  borderRadius: 20,
  backgroundColor: "#0e185f",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0e185f",
    color: "white",
  },
});

export default function AuthSubmitButton({ title }) {
  return <StyledButton variant="contained">{title}</StyledButton>;
}
