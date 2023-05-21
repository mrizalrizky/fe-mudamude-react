import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography } from "@mui/material";
import Banner from "../assets/images/banner.png";
import EventCard from "../components/card/EventCard";
import MemberBenefitCard from "../components/card/MemberBenefitCard";
import axios from "axios";

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
            display: "flex",
            justifyContent: "center",
            gap: "5em",
            flexWrap: "wrap",
            marginBottom: "1em",
          }}
        >
          <MemberBenefitCard />
          <MemberBenefitCard />
          <MemberBenefitCard />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PartnershipPage;
