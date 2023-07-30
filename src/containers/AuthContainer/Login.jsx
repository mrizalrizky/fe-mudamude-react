import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BaseInput } from "../../components/inputs/BaseInput";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";

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
      localStorage.setItem("token", response.data.data.access_token);
      localStorage.setItem("username", response.data.data.username);
      localStorage.setItem("verified_flag", response.data.data.verified_flag);
      window.location.assign("/");
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
    <Stack>
      <BaseInput
        label="Username"
        name="username"
        type="text"
        onChange={handleInputChange}
      />
      <BaseInput
        label="Password"
        name="password"
        type="password"
        onChange={handleInputChange}
      />
      <Box
        sx={{
          alignSelf: "end",
          marginBottom: "1.5em",
        }}
      >
        <Link to="/forgot-password" style={{ textDecoration: "none" }}>
          <Typography variant="caption" color="#0e185f">
            Lupa password?
          </Typography>
        </Link>
      </Box>

      <Stack sx={{ gap: "0.5em", alignItems: "center" }}>
        <AuthSubmitButton onClick={submitHandler}>Login</AuthSubmitButton>
        <AuthSubmitButton bgColor="white">Login with Google</AuthSubmitButton>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Typography variant="caption" color="#0e185f">
            Belum punya akun? Yuk daftar dulu!
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};
