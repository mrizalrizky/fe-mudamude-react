import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/card/EventCard";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import EventSearchTab from "../components/EventSearchTab";
import Breadcrumb from "../components/Breadcrumb";

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
        <Header bgColor="#f4f4f4" />
        <Breadcrumb
          title="Mulai cari event & kegiatan"
          description="buat bantu kembangin diri!"
        />
        <EventSearchTab />
        <Box
          component="div"
          sx={{
            paddingX: "12em",
            paddingY: "1.5em",
            display: "flex",
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "81vw",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "5.3em",
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
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default EventPage;
