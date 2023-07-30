import React from "react";
import { Box, Stack } from "@mui/material";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";
import { BaseInput } from "../../components/inputs/BaseInput";

export const ForgotPassword = () => {
  return (
    <Stack>
      <BaseInput label="Email address" name="email" />
      <Box
        sx={{
          alignSelf: "center",
        }}
      >
        <AuthSubmitButton
          onClick={() => console.log("RESET PASSWORD EMAIL SENT")}
        >
          Send
        </AuthSubmitButton>
      </Box>
    </Stack>
  );
};
