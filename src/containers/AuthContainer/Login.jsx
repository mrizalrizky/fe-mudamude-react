import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { AuthInput } from "../../components/inputs/AuthInput";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [userData, setUserData] = useState({
    username: null,
    password: null,
  });

  const submitHandler = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      userData
    );

    if (response && response.data) {
      // window.location.assign("/");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <AuthInput
        title="Username"
        name="username"
        type="text"
        onChange={handleInputChange}
      />
      <AuthInput
        title="Password"
        name="password"
        type="password"
        onChange={handleInputChange}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1.5em",
        }}
      >
        <Link to="/forgot-password" style={{ textDecoration: "none" }}>
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
            onClick={submitHandler}
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
