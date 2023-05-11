import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardItem from "../components/DashboardItem";
import personIcon from "../assets/icons/ic_profile.svg";
import noteIcon from "../assets/icons/ic_events.svg";
import cardIcon from "../assets/icons/ic_card.svg";
import lockIcon from "../assets/icons/ic_lock.svg";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Box component="div" sx={{ display: "inline-block", marginLeft: "90px" }}>
        <Typography variant="h4" color="#0e185f" fontWeight={700}>
          Dashboard
        </Typography>
        <Box
          component="div"
          sx={{ backgroundColor: "#f4f4f4", height: "20em" }}
        >
          <Grid container xs={12}>
            <Grid item xs={8}>
              <Avatar
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              ></Avatar>
              <DashboardItem title="Profile" image={personIcon} />
              <DashboardItem title="Events" image={noteIcon} />
              <DashboardItem title="Membership" image={cardIcon} />
              <DashboardItem title="Security" image={lockIcon} />
            </Grid>
          </Grid>
        </Box>

        <Box component="div">
          <Typography variant="h5" color="#0e185f" fontWeight={700}>
            Event
          </Typography>
          <Typography variant="subtitle1" color="0e185f" fontSize="18px">
            Kelola event yang sudah kamu upload dan ikuti
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProfilePage;
