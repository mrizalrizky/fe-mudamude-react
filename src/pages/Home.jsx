import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BenefitCard from "../components/card/BenefitCard";
import heroBanner from "../assets/images/hero_banner.jpg";
import infoEvent from "../assets/images/info_event.png";
import promoteEvent from "../assets/images/promote_event.png";
import belajarBareng from "../assets/images/belajar_bareng.png";

const HeroText = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  fontSize: "40px",
  fontWeight: 700,
  marginBottom: "25px",
});

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const CTAText = styled(Typography)({
  marginTop: "135px",
  marginBottom: "20px",
  fontWeight: "600",
  color: "#0e185f",
});

const BenefitSection = styled(Typography)({
  fontSize: "30px",
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
  color: "#0e185f",
  fontWeight: "600",
});

const BenefitCardContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  gap: "1.5em",
  marginBottom: "25px",
});

const Home = () => {
  return (
    <>
      <Header href="/" />
      <StyledContainer fixed>
        <Box component="div">
          <HeroText variant="h1" color="#0e185f">
            Platform Kolaborasi Anak Muda Indonesia
          </HeroText>
          <Box component="div">
            <img
              src={heroBanner}
              alt="Hero Banner"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Button
          href="/register"
          variant="contained"
          sx={{
            width: "200px",
            height: "60px",
            backgroundColor: "#2FA4FF",
            color: "white",
            borderRadius: "50px",
          }}
        >
          Gabung Sekarang
        </Button>
      </StyledContainer>
      <Container>
        <CTAText variant="h4">Gerak bareng MudaMude</CTAText>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          textAlign="justify"
          marginBottom={15}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nam
          dignissimos eos incidunt quia consectetur adipisci voluptatibus
          facilis eligendi totam quibusdam, earum aut minima sequi tempora,
          blanditiis similique doloremque debitis?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Aut commodi quae, dicta rerum inventore,
          quo omnis molestias labore fugiat expedita nobis. Ut velit a ducimus
          illo accusamus rem, recusandae dolor?Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Laudantium, sequi totam enim inventore
          nobis excepturi atque minima, exercitationem aut reprehenderit vitae
          neque error quod quos nihil dolore. Voluptatum, amet aut!
        </Typography>
      </Container>
      <BenefitSection>
        Benefit yang kamu dapetin kalau ikut gabung!
      </BenefitSection>
      <BenefitCardContainer>
        <BenefitCard
          title="Info Event dan Webinar"
          image={infoEvent}
          buttonText="Cari Info"
        />
        <BenefitCard
          title="Promosiin Event Kamu"
          image={promoteEvent}
          buttonText="Upload Event"
        />
        <BenefitCard
          title="Belajar Bareng Positive Circle"
          image={belajarBareng}
          buttonText="Cari Teman"
        />
      </BenefitCardContainer>
      <Footer />
    </>
  );
};

export default Home;
