import React from "react";
import Header from "../components/Header";
import { Container, Grid, Stack, Typography } from "@mui/material";
import AuthBanner from "../assets/images/auth_banner2.png";
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
      <Container>
        <Stack gap="1em">
          <Stack gap="0.25em">
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              {title}
            </Typography>
            <Typography variant="body1" color="#0e185f">
              {description}
            </Typography>
          </Stack>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid
              item
              sx={{
                width: 375,
                height: "fit-content",
                padding: "2.5em",
                backgroundColor: "#f4f4f4",
                borderRadius: 5,
              }}
            >
              {currentPath === "/register" && <Register />}
              {currentPath === "/login" && <Login />}
              {currentPath === "/forgot-password" && <ForgotPassword />}
            </Grid>
            <Grid item>
              <img height={450} src={AuthBanner} alt="Auth Banner" />
            </Grid>
          </Grid>
        </Stack>
        {/* <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box component="div" sx={{ width: 375, marginRight: "2em" }}>
            <Box component="div" sx={{ marginBottom: "3em" }}>
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
          </Box>
        </Box> */}
      </Container>
      <Footer />
    </>
  );
};

export default AuthPage;
