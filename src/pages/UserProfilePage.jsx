import { Box, Input, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import DashboardCard from "../components/card/DashboardCard";
import UserAvatar from "../components/UserAvatar";
import Footer from "../components/Footer";

const UserProfilePage = () => {
  return (
    <>
      <Header />
      <Box component="div" sx={{ display: "flex", paddingLeft: "10em" }}>
        <DashboardCard />
        <Box
          component="div"
          sx={{
            width: "100%",
            marginLeft: "5em",
          }}
        >
          <Box component="div">
            <Typography variant="h4" color="#0e185f" fontWeight={600}>
              Edit Profile
            </Typography>
          </Box>
          <Box component="div" sx={{ marginBottom: "1.5em" }}>
            <Typography variant="h6">Your account information</Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: 375,
              height: "auto",
              padding: "0.5em 2.5em 2.5em 2.5em",
              backgroundColor: "#f4f4f4",
              borderRadius: 5,
            }}
          >
            <UserAvatar
              fullName="Jane Evelyn"
              institution="Universitas Bina Nusantara"
            />
            <Box component="div" sx={{ marginY: "1em" }}>
              <typography variant="h4">Personal Information</typography>
            </Box>
            <Box component="div" sx={{ marginBottom: "1.5em" }}>
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
              ></Input>
            </Box>
            <Box component="div" sx={{ marginBottom: "0.5em" }}>
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
              ></Input>
            </Box>
            <Box component="div" sx={{ marginBottom: "0.5em" }}>
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
            <Box component="div" sx={{ marginBottom: "0.5em" }}>
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
              ></Input>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default UserProfilePage;
