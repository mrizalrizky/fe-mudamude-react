import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AboutBanner from "../assets/images/about_banner.png";
import qnaBanner from "../assets/images/qna_banner.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({});

const AboutPage = () => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <Container>
        <Stack
          sx={{
            marginBottom: "2em",
            alignItems: "center",
            borderRadius: 5,
            // backgroundColor: "#f4f4f4",
          }}
        >
          <Box
            sx={{
              paddingX: "5em",
              paddingY: "2em",
              maxWidth: "750px",
              borderRadius: 5,
              backgroundColor: "#f4f4f4",
            }}
          >
            <img
              width="100%"
              height="auto"
              style={{ display: "block" }}
              src={AboutBanner}
              alt="About Banner"
            />
          </Box>
        </Stack>

        <Stack gap="3rem">
          <Stack gap="0.5rem">
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              Our Mission
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              Menjadi solusi untuk menambah wawasan dan membantu anak-anak muda
              indonesia dalam berkolaborasi, baik itu mempromosikan
              event/kegiatan antar kampus/institusi hingga menjadi platform yang
              mewadahi mereka dalam mengembangkan diri.
            </Typography>
          </Stack>
          <Stack gap="0.5rem">
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              Kenapa MudaMude?
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              MudaMude memfasilitasi anak muda untuk mempromosikan event hingga
              kegiatan. Selain itu, MudaMude juga membantu anak muda hingga
              mahasiswa dalam menemukan teman belajar, mengedukasi anak muda
              dalam mengembangkan diri, dan harapannya dapat menjadi wadah
              sharing kolaborasi hingga informasi.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              padding: "3em",
              height: "auto",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 5,
              backgroundColor: "#2FA4FF",
            }}
          >
            <Grid>
              <Typography fontSize="24px" fontWeight={600} color="#ffffff">
                Punya pertanyaan?
              </Typography>
              <Typography fontSize="24px" fontWeight={600} color="#ffffff">
                mudamude@company.com
              </Typography>
            </Grid>
            <Grid>
              <img src={qnaBanner} alt="qna banner" />
            </Grid>
          </Stack>
        </Stack>
        {/* <Box
          component="div"
          sx={{
            display: "flex",
            >
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            borderRadius: 5,
            marginBottom: "2em",
          }}
        </Box> */}
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
