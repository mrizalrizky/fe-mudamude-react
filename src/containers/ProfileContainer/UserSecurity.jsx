import React from "react";
import { Box, Input, Stack, Typography } from "@mui/material";
import { AuthInput } from "../../components/inputs/AuthInput";

export const UserSecurity = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        marginRight: "5em",
        padding: "2em 2.5em",
        backgroundColor: "#f4f4f4",
        borderRadius: 5,
      }}
    >
      <Typography variant="h5" color="#0e185f" fontWeight={600}>
        Change Password
      </Typography>
      <Stack sx={{ marginTop: "1em" }}>
        <AuthInput title="Old Password" />
        <AuthInput title="New Password" />
        <AuthInput title="Confirm New Password" />
      </Stack>
    </Box>
  );
};
