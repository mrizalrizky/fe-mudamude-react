import React from "react";
import Header from "../components/Header";
import { Box, Button, Container, Input, Typography } from "@mui/material";
import AuthBanner from "../assets/images/auth_banner.jpg";
import Footer from "../components/Footer";
import { Login } from "../containers/AuthContainer/Login";
import { Register } from "../containers/AuthContainer/Register";
import { ForgotPassword } from "../containers/AuthContainer/ForgotPassword";
import { useLocation } from "react-router";

const AuthPage = ({ title, description }) => {
  const currentPath = useLocation().pathname;
  return (
    <>
      <Header />
      <Container fixed>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            // marginTop: "6.5em",
          }}
        >
          <Box component="div" sx={{ width: 375, marginRight: "2em" }}>
            <Box component="div" sx={{ marginBottom: "3em" }}>
              <Typography
                variant="h5"
                sx={{ display: "inline" }}
                fontWeight={600}
                color="#0e185f"
              >
                {title}
              </Typography>
              <Typography variant="body1" color="#0e185f">
                {description}
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                width: 375,
                height: "auto",
                padding: "2.5em",
                backgroundColor: "#f4f4f4",
                borderRadius: 5,
              }}
            >
              {currentPath === "/register" && <Register />}
              {currentPath === "/login" && <Login />}
              {currentPath === "/forgot-password" && <ForgotPassword />}
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              marginTop: "6.5em",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img height={450} src={AuthBanner} alt="Auth Banner" />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AuthPage;
