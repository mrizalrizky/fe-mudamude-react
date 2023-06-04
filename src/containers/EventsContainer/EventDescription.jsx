import React from "react";
import { Box, Typography } from "@mui/material";

export default function EventDescription({ description }) {
  return (
    <Box component="div">
      <Typography variant="body1" fontWeight={500}>
        {description}
      </Typography>
    </Box>
  );
}
