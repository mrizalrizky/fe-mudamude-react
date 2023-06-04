import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";

export const ForgotPassword = () => {
  return (
    <>
      <Box component="div" sx={{ marginBottom: "1em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Email address
        </Typography>
        <Input
          disableUnderline
          fullWidth
          sx={{
            backgroundColor: "white",
            padding: "0.5em",
            alignItems: "center",
            borderRadius: 2,
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AuthSubmitButton name="Send" />
      </Box>
    </>
  );
};
