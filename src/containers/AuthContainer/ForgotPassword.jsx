import React from "react";
import { Box } from "@mui/material";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";
import { BaseInput } from "../../components/inputs/BaseInput";

export const ForgotPassword = () => {
  return (
    <>
      <BaseInput title="Email address" name="email" />
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
