import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AuthSubmitButton from "../../components/button/AuthSubmitButton";
import { AuthInput } from "../../components/inputs/AuthInput";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [userData, setUserData] = useState({
    full_name: null,
    username: null,
    email: null,
    password: null,
    repeat_password: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        userData
      );

      if (response && response.data) {
        window.location.assign("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthInput
        title="Full Name"
        name="full_name"
        type="text"
        onChange={handleInputChange}
      />
      <AuthInput
        title="Username"
        name="username"
        type="text"
        onChange={handleInputChange}
      />
      <AuthInput
        title="Email address"
        name="email"
        type="email"
        onChange={handleInputChange}
      />
      <AuthInput
        title="Password"
        name="password"
        type="password"
        onChange={handleInputChange}
      />
      <AuthInput
        title="Confirm Password"
        name="repeat_password"
        type="password"
        onChange={handleInputChange}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "1em",
        }}
      >
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Typography variant="caption" color="#0e185f">
            Sudah punya akun? Masuk di sini
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
        <AuthSubmitButton onClick={submitHandler}>Register</AuthSubmitButton>
      </Box>
    </>
  );
};
