import { Box, Input, Typography } from "@mui/material";
import React from "react";
import UserAvatar from "../../components/UserAvatar";

export const UserMembership = () => {
  return (
    <Box
      component="div"
      sx={{
        width: 400,
        height: "auto",
        padding: "0.5em 2.5em 2.5em 2.5em",
        backgroundColor: "red",
        borderRadius: 5,
        marginLeft: "7.5em",
      }}
    >
      <UserAvatar
        fullName="Jane Evelyn"
        institution="Universitas Bina Nusantara"
      />
      <Box component="div" sx={{ marginY: "1em" }}>
        <Typography variant="h5" color="#0e185f" fontWeight={600}>
          Personal Information
        </Typography>
      </Box>
      <Box component="div" sx={{ marginBottom: "1.5em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Full Name
        </Typography>
        <Input
          disableUnderline
          sx={{
            backgroundColor: "white",
            padding: "0.5em",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "0.5em",
          }}
        />
      </Box>
      <Box component="div" sx={{ marginBottom: "0.5em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Username
        </Typography>
        <Input
          disableUnderline
          sx={{
            backgroundColor: "white",
            padding: "0.5em",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "0.5em",
          }}
        />
      </Box>
      <Box component="div" sx={{ marginBottom: "0.5em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Email Address
        </Typography>
        <Input
          disableUnderline
          sx={{
            backgroundColor: "white",
            padding: "0.5em",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "0.5em",
          }}
        />
      </Box>
      <Box component="div" sx={{ marginBottom: "0.5em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Password
        </Typography>
        <Input
          disableUnderline
          sx={{
            backgroundColor: "white",
            padding: "0.5em",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "0.5em",
          }}
        />
      </Box>
      <Box component="div" sx={{ marginBottom: "0.5em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Confirm Password
        </Typography>
        <Input
          disableUnderline
          // fullWidth
          sx={{
            backgroundColor: "white",
            padding: "0.5em",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "0.5em",
          }}
        />
      </Box>
    </Box>
  );
};
