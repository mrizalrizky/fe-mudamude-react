import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { AuthInput } from "../../components/inputs/AuthInput";

export const Login = () => {
  return (
    <>
      <AuthInput title="Email address" name="email" />
      <AuthInput title="Password" name="password" />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1.5em",
        }}
      >
        <a href="/forgot-password" style={{ textDecoration: "none" }}>
          <Typography variant="caption" color="#0e185f">
            Lupa password?
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
        <Box
          component="div"
          sx={{
            width: "auto",
            height: "auto",
          }}
        >
          <Button
            sx={{
              width: 250,
              height: 45,
              borderRadius: 20,
              backgroundColor: "#0e185f",
              color: "white",
              marginBottom: "1em",
            }}
          >
            Login
          </Button>
          <Box
            component="div"
            sx={{
              width: "auto",
              height: "auto",
            }}
          >
            <Button
              sx={{
                width: 250,
                height: 45,
                borderRadius: 20,
                backgroundColor: "white",
                color: "#0e185f",
              }}
            >
              Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          marginTop: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="/register" style={{ textDecoration: "none" }}>
          <Typography variant="caption" color="#0e185f">
            Belum punya akun? Yuk daftar dulu!
          </Typography>
        </a>
      </Box>
    </>
  );
};
