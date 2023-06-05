import React from "react";
import { Box, Typography } from "@mui/material";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";
import { AuthInput } from "../../components/inputs/AuthInput";

export const Register = () => {
  return (
    <>
      <AuthInput title="Full Name" name="full_name" />
      <AuthInput title="Username" name="username" />
      <AuthInput title="Email address" name="email" />
      <AuthInput title="Password" name="password" />
      <AuthInput title="Confirm Password" name="confirm_password" />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "1em",
        }}
      >
        <a href="/login" style={{ textDecoration: "none" }}>
          <Typography variant="caption" color="#0e185f">
            Sudah punya akun? Masuk di sini
          </Typography>
        </a>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AuthSubmitButton title="Register" />
      </Box>
    </>
  );
};
