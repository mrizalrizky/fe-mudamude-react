import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileSidebar from "../components/ProfileSidebar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { UserEvent } from "../containers/ProfileContainer/UserEvent";
import { UserProfile } from "../containers/ProfileContainer/UserProfile";
import { UserMembership } from "../containers/ProfileContainer/UserMembership";
import { UserSecurity } from "../containers/ProfileContainer/UserSecurity";
import axios from "axios";

const ProfilePage = ({ title, description }) => {
  const currentPath = useLocation().pathname;
  const username = localStorage.getItem("username");

  const [userInfo, setUserInfo] = useState({});

  const fetchUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/profile/${username}`
    );
    setUserInfo(response.data.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid container sx={{ gap: "5em" }}>
          <Grid>
            <ProfileSidebar data={userInfo} />
          </Grid>
          <Grid sx={{ flexGrow: 1 }}>
            <Stack spacing={4}>
              <Grid>
                <Typography variant="h5" color="#0e185f" fontWeight={700}>
                  {title}
                </Typography>
                <Typography variant="caption" color="#0e185f" fontSize="18px">
                  {description}
                </Typography>
              </Grid>
              <Grid>
                {currentPath === "/profile" && <UserProfile data={userInfo} />}
                {currentPath === "/profile/event" && <UserEvent />}
                {currentPath === "/profile/membership" && <UserMembership />}
                {currentPath === "/profile/security" && <UserSecurity />}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
