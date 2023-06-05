import React from "react";
import { Box, Input, Typography } from "@mui/material";

export const AuthInput = ({ title, name }) => {
  return (
    <Box component="div" sx={{ marginBottom: "1em" }}>
      <Typography variant="body1" color="#0e185f" fontWeight={500}>
        {title}
      </Typography>
      <Input
        disableUnderline
        fullWidth
        name={name}
        sx={{
          backgroundColor: "white",
          padding: "0.5em",
          alignItems: "center",
          borderRadius: 2,
        }}
      />
    </Box>
  );
};
