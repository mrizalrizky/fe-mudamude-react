import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/card/EventCard";
import axios from "axios";
import { Box, Container, Grid, Typography } from "@mui/material";
import SearchMenuBar from "../components/menubar/SearchMenuBar";
import Breadcrumb from "../components/Breadcrumb";

const EventPage = () => {
  const [eventList, setEventList] = useState([]);
  const getEventList = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/event/all`);
    setEventList(res.data.data);
  };
  useEffect(() => {
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
          pageTitle="Mulai cari event & kegiatan"
          pageDescription="buat bantu kembangin diri!"
        />
        <SearchMenuBar />
        <Container>
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            All Events
          </Typography>
          <Grid
            container
            sx={{ justifyContent: "space-between", marginTop: "1em" }}
          >
            {eventList && eventList.length > 0 ? (
              eventList.map((event) => {
                return (
                  <Grid item sx={{ marginBottom: "3em" }}>
                    <EventCard data={event} />
                  </Grid>
                );
              })
            ) : (
              <p>Empty</p>
            )}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default EventPage;
