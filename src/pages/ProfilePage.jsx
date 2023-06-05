import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import DashboardCard from "../components/card/DashboardCard";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { UserEvent } from "../containers/ProfileContainer/UserEvent";
import { UserProfile } from "../containers/ProfileContainer/UserProfile";
import { UserMembership } from "../containers/ProfileContainer/UserMembership";
import { UserSecurity } from "../containers/ProfileContainer/UserSecurity";

const ProfilePage = ({ title, description }) => {
  const currentPath = useLocation().pathname;

  return (
    <>
      <Header />
      <Box
        component="div"
        sx={{
          display: "flex",
          paddingLeft: "10em",
          backgroundColor: "magenta",
        }}
      >
        <DashboardCard />
        <Box component="div" sx={{ width: "100%" }}>
          <Box component="div" sx={{ marginLeft: "7.5em" }}>
            <Box component="div" sx={{ marginBottom: "2.5em" }}>
              <Typography variant="h5" color="#0e185f" fontWeight={700}>
                {title}
              </Typography>
              <Typography variant="caption" color="#0e185f" fontSize="18px">
                {description}
              </Typography>
            </Box>
          </Box>
          {currentPath === "/profile" && <UserProfile />}
          {currentPath === "/profile/event" && <UserEvent />}
          {currentPath === "/profile/membership" && <UserMembership />}
          {currentPath === "/profile/security" && <UserSecurity />}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProfilePage;
