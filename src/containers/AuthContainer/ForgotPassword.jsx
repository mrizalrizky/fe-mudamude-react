import React from "react";
import { Box } from "@mui/material";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";
import { AuthInput } from "../../components/inputs/AuthInput";

export const ForgotPassword = () => {
  return (
    <>
      <AuthInput title="Email address" name="email" />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AuthSubmitButton title="Send" />
      </Box>
    </>
  );
};
