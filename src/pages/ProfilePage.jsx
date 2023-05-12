import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardCard from "../components/card/DashboardCard";
import EventCard from "../components/card/EventCard";
import axios from "axios";

const ProfilePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const res = await axios.get("http://localhost:3344/api/event/all");
        setEvents(res.data.data);
      } catch (error) {
        console.log("error:> ", error);
      }
    };
    getEventData();
  }, []);

  return (
    <>
      <Header />
      <Box component="div" sx={{ display: "flex" }}>
        <DashboardCard />

        <Box component="div" sx={{ marginLeft: "10em" }}>
          <Typography variant="h5" color="#0e185f" fontWeight={700}>
            Event
          </Typography>
          <Typography variant="subtitle1" color="#0e185f" fontSize="18px">
            Kelola event yang sudah kamu upload dan ikuti
          </Typography>

          <Box component="div"></Box>

          {events.length > 0 ? (
            events.map((data) => {
              return (
                <Box
                  sx={{ display: "inline-block", margin: "3em 5em 1em 0" }}
                  key={data.id_event}
                >
                  <EventCard event={data} />
                </Box>
              );
            })
          ) : (
            <p>No events</p>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProfilePage;
