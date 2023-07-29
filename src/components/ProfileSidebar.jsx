import React, { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import DashboardItem from "./DashboardItem";
import personIcon from "../assets/icons/ic_profile.svg";
import noteIcon from "../assets/icons/ic_events.svg";
import cardIcon from "../assets/icons/ic_card.svg";
import lockIcon from "../assets/icons/ic_lock.svg";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

export default function ProfileSidebar({ data }) {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const [pageComponent, setPageComponent] = useState("USER_PROFILE");

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
            {data.fullName ?? "-"}
          </Typography>
          <Typography variant="body2" fontWeight={400} color="#0e185f">
            {data.institution ?? "-"}
          </Typography>
        </Box>
        <Box component="div" sx={{ marginTop: "20px" }}>
          <DashboardItem
            title="Profile"
            icon={personIcon}
            isActive={currentPath === "/profile"}
            onClick={() => {
              setPageComponent("USER_PROFILE");
              navigate("/profile");
            }}
          />
          <DashboardItem
            title="Events"
            icon={noteIcon}
            isActive={currentPath === "/profile/event"}
            onClick={() => {
              setPageComponent("USER_EVENTS");
              navigate("/profile/event");
            }}
          />
          <DashboardItem
            title="Membership"
            icon={cardIcon}
            isActive={currentPath === "/profile/membership"}
            onClick={() => {
              setPageComponent("USER_MEMBERSHIP");
              navigate("/profile/membership");
            }}
          />
          <DashboardItem
            title="Security"
            icon={lockIcon}
            isActive={currentPath === "/profile/security"}
            onClick={() => {
              setPageComponent("USER_SECURITY");
              navigate("/profile/security");
            }}
          />
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
