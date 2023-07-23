import React from "react";
import { Box, Input, TextField, Typography } from "@mui/material";

export const AuthInput = ({ title, name, type, onChange }) => {
  return (
    <Box component="div" sx={{ marginBottom: "1em" }}>
      <Typography variant="body1" color="#0e185f" fontWeight={500}>
        {title}
      </Typography>
      <TextField
        disableUnderline
        fullWidth
        name={name}
        onChange={onChange}
        type={type}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
        }}
      />
    </Box>
  );
};
