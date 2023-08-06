import React from "react";
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  color: "#0e185f",

  textAlign: "center",
  width: "15.5em",
  marginX: "20px",
  marginLeft: "20px",
  marginRight: "20px",
  height: "4em",
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  borderRadius: "15px",
  textTransform: "none",
  "&:hover": {
    color: "#0e185f",
    backgroundColor: "white",
  },
}));

export default function DashboardItem({ isActive, onClick, title, icon }) {
  return (
    <StyledButton
      startIcon={<img src={icon} width={30} height={45} alt="Icon" />}
      sx={{ backgroundColor: isActive ? "white" : "" }}
      onClick={onClick}
    >
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>
    </StyledButton>
  );
}
