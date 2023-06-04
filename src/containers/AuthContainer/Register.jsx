import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";

export const Register = () => {
  return (
    <>
      <Box component="div" sx={{ marginBottom: "1em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Full Name
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
      <Box component="div" sx={{ marginBottom: "1em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Username
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
      <Box component="div" sx={{ marginBottom: "1em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Email Address
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
      <Box component="div" sx={{ marginBottom: "1em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Password
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
      <Box component="div">
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Confirm Password
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
          justifyContent: "flex-start",
          marginBottom: "1em",
        }}
      >
        <Link underline="none" href="/login">
          <Typography variant="caption" color="#0e185f">
            Terms & Conditions
          </Typography>
        </Link>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AuthSubmitButton name="Register" />
      </Box>
    </>
  );
};
