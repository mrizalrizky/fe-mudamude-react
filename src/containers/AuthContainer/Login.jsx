import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Box component="div" sx={{ marginBottom: "1em" }}>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Email address
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
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1.5em",
        }}
      >
        <Link underline="none">
          <Typography variant="caption" color="#0e185f">
            Lupa password?
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
        <Link underline="none" href="/register">
          <Typography variant="caption" color="#0e185f">
            Belum punya akun? Yuk daftar dulu!
          </Typography>
        </Link>
      </Box>
    </>
  );
};
