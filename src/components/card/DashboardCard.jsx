import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import DashboardItem from "../DashboardItem";
import personIcon from "../../assets/icons/ic_profile.svg";
import noteIcon from "../../assets/icons/ic_events.svg";
import cardIcon from "../../assets/icons/ic_card.svg";
import lockIcon from "../../assets/icons/ic_lock.svg";

export default function DashboardCard(props) {
  return (
    <Box component="div" sx={{ display: "inline-block" }}>
      <Typography
        variant="h4"
        color="#0e185f"
        fontWeight={700}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Dashboard
      </Typography>
      <Box
        component="div"
        sx={{
          backgroundColor: "#f4f4f4",
          width: "auto",
          height: "auto",
          marginTop: "3.5em",
          paddingBottom: "2em",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2em",
            marginBottom: "0.5em",
          }}
        >
          <Avatar sx={{ marginBottom: "15px", width: 75, height: 75 }} />
          <Typography variant="h6" fontWeight={600} color="#0e185f">
            Jane Evelyn
          </Typography>
          <Typography variant="body2" fontWeight={400} color="#0e185f">
            Universitas Bina Nusantara
          </Typography>
        </Box>
        <Box component="div" sx={{ marginTop: "20px" }}>
          <DashboardItem title="Profile" image={personIcon} />
          <DashboardItem title="Events" image={noteIcon} />
          <DashboardItem title="Membership" image={cardIcon} />
          <DashboardItem title="Security" image={lockIcon} />
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2.5em",
          }}
        >
          <Typography variant="body1" color="#0e185f">
            Butuh bantuan?
          </Typography>
          <Typography variant="h6" color="#EB0606">
            Log out
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
