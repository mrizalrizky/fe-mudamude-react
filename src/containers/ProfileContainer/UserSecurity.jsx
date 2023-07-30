import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BaseInput } from "../../components/inputs/BaseInput";

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
        <BaseInput label="Old Password" name="old_password" type="password" />
        <BaseInput label="New Password" name="new_password" type="password" />
        <BaseInput
          label="Confirm New Password"
          name="confirm_new_password"
          type="password"
        />
      </Stack>
    </Box>
  );
};
