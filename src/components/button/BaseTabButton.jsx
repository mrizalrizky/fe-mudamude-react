import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  borderRadius: 8.5,
  padding: "0.25em 1em 0.25em 1em",
  marginLeft: "0.25em",
  textTransform: "none",
  backgroundColor: "#0e185f",
  color: "white",
  "&:hover": {
    color: "#0e185f",
    backgroundColor: "white",
  },
});

export default function BaseTabButton({ isActive, onClick, title }) {
  return (
    <StyledButton
      variant="contained"
      sx={{
        color: isActive ? "#0e185f" : "white",
        backgroundColor: isActive ? "white" : "#0e185f",
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2" fontWeight={600}>
        {title}
      </Typography>
    </StyledButton>
  );
}
