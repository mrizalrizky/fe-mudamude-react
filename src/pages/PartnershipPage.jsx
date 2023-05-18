import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Button, Container, Typography } from "@mui/material";
import Banner from "../assets/images/banner.png";
import EventCard from "../components/card/EventCard";

const PartnershipPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: 250,
            paddingX: "3em",
            marginBottom: "2em",
            borderRadius: 5,
            backgroundColor: "red",
            backgroundImage: { Banner },
          }}
        />
        <Box component="div" sx={{ marginBottom: "2em" }}>
          <Typography variant="h5" fontWeight={600} color="#0E185F">
            Kolaborasi yang sedang berlangsung
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", gap: "5em", flexWrap: "wrap" }}
        >
          <EventCard />
          <EventCard />
          <EventCard />
        </Box>

        <Box
          component="div"
          sx={{
            width: "100%",
            height: 250,
            paddingX: "3em",
            marginBottom: "2em",
            borderRadius: 5,
            backgroundColor: "aqua",
          }}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2em",
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            Waktunya jadi member!
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            width: 250,
            height: "auto",
            backgroundColor: "#f4f4f4",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2em",
          }}
        >
          <Typography variant="body1" fontWeight={600} color="#0e185f">
            Express
          </Typography>
          <Typography vairant="subtitle1" fontWeight={500} color="#0e185f">
            Rp 0/bulan
          </Typography>
          <Button
            sx={{
              backgroundColor: "#0e185f",
              color: "white",
              borderRadius: 10,
              paddingX: "3em",
            }}
          >
            Beli
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PartnershipPage;
