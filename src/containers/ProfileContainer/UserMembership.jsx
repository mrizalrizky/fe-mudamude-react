import { Box, TextField, Typography } from "@mui/material";
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
        <TextField
          disableUnderline
          sx={{
            backgroundColor: "white",
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
        <TextField
          disableUnderline
          sx={{
            backgroundColor: "white",
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
        <TextField
          disableUnderline
          sx={{
            backgroundColor: "white",
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
        <TextField
          disableUnderline
          sx={{
            backgroundColor: "white",
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
        <TextField
          disableUnderline
          // fullWidth
          sx={{
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "0.5em",
          }}
        />
      </Box>
    </Box>
  );
};
