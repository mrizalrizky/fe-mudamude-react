import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography } from "@mui/material";
import AboutBanner from "../assets/images/about_banner.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({});

const AboutPage = () => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <Container sx={{ backgroundColor: "yellow" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            borderRadius: 5,
            marginBottom: "2em",
          }}
        >
          <Box component="div" sx={{ backgroundColor: "magenta" }}>
            <img src={AboutBanner} alt="About Banner" />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "5em" }}
        >
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              Our Mission
            </Typography>
            <Typography variant="body1" fontWeight={600} color="#0e185f">
              Menjadi solusi untuk menambah wawasan dan membantu anak-anak muda
              indonesia dalam berkolaborasi, baik itu mempromosikan
              event/kegiatan antar kampus/institusi hingga menjadi platform yang
              mewadahi mereka dalam mengembangkan diri.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              Kenapa MudaMude?
            </Typography>
            <Typography variant="body1" fontWeight={600} color="#0e185f">
              MudaMude memfasilitasi anak muda untuk mempromosikan event hingga
              kegiatan. Selain itu, MudaMude juga membantu anak muda hingga
              mahasiswa dalam menemukan teman belajar, mengedukasi anak muda
              dalam mengembangkan diri, dan harapannya dapat menjadi wadah
              sharing kolaborasi hingga informasi.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
