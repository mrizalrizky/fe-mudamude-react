import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/card/EventCard";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import EventSearchTab from "../components/EventSearchTab";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEventList = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/event/all`);
      setEvents(res.data.data);
    };
    getEventList();
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          height: "20em",
          backgroundColor: "#f4f4f4",
          borderRadius: "0 0 30px 30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box component="div" sx={{ padding: "2em 3em" }}>
          <Typography
            variant="h4"
            sx={{ display: "inline" }}
            fontWeight={600}
            color="#0e185f"
          >
            Mulai cari event & kegiatan
          </Typography>
          <Typography variant="h6" color="#0e185f">
            buat bantu kamu kembangin diri!
          </Typography>
        </Box>
        <EventSearchTab />

        <Box
          component="div"
          sx={{
            paddingX: "12em",
            paddingY: "1.5em",
            display: "flex",
            backgroundColor: "aqua",
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            All Events
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            width: "auto",
            paddingX: "5em",
            marginBottom: "2em",
            gap: "5em",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundColor: "green",
          }}
        >
          {events.length > 0 ? (
            events.map((data) => {
              return <EventCard data={data} />;
            })
          ) : (
            <p>Empty</p>
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default EventPage;
