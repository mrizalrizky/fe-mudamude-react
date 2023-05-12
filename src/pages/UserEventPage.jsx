import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardCard from "../components/card/DashboardCard";
import EventCard from "../components/card/EventCard";
import axios from "axios";

const UserEventPage = () => {
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

        <Box
          component="div"
          sx={{
            padding: "0 2em 0 10em",
          }}
        >
          <Typography variant="h5" color="#0e185f" fontWeight={700}>
            Event
          </Typography>
          <Typography variant="caption" color="#0e185f" fontSize="18px">
            Kelola event yang sudah kamu upload dan ikuti
          </Typography>

          <Box
            component="div"
            sx={{
              marginTop: "2.5em",
              width: "85%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                backgroundColor: "#0e185f",
                borderRadius: 5,
                padding: "1.25em 1.75em 1.25em 1.75em",
                display: "flex",
                marginRight: "2px",
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor: "#0e185f",
                  borderRadius: 2,
                  padding: "0.25em 1em 0.25em 1em",
                  marginLeft: "0.25em",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={"white"}
                  fontWeight={600}
                >
                  Uploaded
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  marginLeft: "0.25em",
                  padding: "0.25em 1em 0.25em 1em",
                }}
              >
                <Typography variant="body2" color={"#0e185f"} fontWeight={600}>
                  Registered
                </Typography>
              </Box>
            </Box>
          </Box>

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

export default UserEventPage;
