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
import { decodeToken } from "../utils/jwtDecode";

const ProfilePage = ({ title, description }) => {
  const currentPath = useLocation().pathname;
  const user = decodeToken(localStorage.getItem("token"));

  const [userData, setUserData] = useState({});

  const fetchUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/profile/${user?.username}`
    );

    if (response && response.data.data) {
      setUserData(response.data.data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid
          container
          sx={{
            gap: "5em",
            flexWrap: "nowrap",
          }}
        >
          <Grid>
            <ProfileSidebar data={userData} />
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
                {currentPath === "/profile" && <UserProfile data={userData} />}
                {currentPath === "/profile/event" && (
                  <UserEvent data={userData} />
                )}
                {currentPath === "/profile/membership" && (
                  <UserMembership data={userData} />
                )}
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
