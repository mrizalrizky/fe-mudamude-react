import React from "react";
import { Box, Button } from "@mui/material";

export default function ArrowButton({ onClick, icon }) {
  return (
    <Button onClick={onClick}>
      <img src={icon} width={45} height={45} alt="Arrow Icon" />
    </Button>
  );
}
