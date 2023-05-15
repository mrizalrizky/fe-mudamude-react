import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthBanner from "../assets/images/auth_banner.jpg";
import { Box, Button, Container, Input, Link, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Container fixed sx={{ display: "flex" }}>
        <Box component="div" sx={{ width: 375, marginRight: "2em" }}>
          <Box component="div" sx={{ marginBottom: "3em" }}>
            <Typography
              variant="h5"
              sx={{ display: "inline" }}
              fontWeight={600}
              color="#0e185f"
            >
              Masuk ke akun kamu
            </Typography>
            <Typography variant="body1" color="#0e185f">
              Login menggunakan akunmu!
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
            <Box component="div" sx={{ marginBottom: "1.5em" }}>
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
              ></Input>
            </Box>
            <Box component="div" sx={{ marginBottom: "0.5em" }}>
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
              ></Input>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "1.5em",
              }}
            >
              <Link underline="none" href="/forgot">
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
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            // backgroundColor: "magenta",
            marginTop: "5em",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img height={450} src={AuthBanner} alt="Auth Banner" />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
