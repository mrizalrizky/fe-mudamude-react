import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroBanner from "../assets/images/hero_banner.jpg";

const useStyles = makeStyles({
  heroImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
});

const Hero = () => {
  const styles = useStyles();

  return (
    <>
      <Container
        fixed
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <Box component="div">
          <Typography
            variant="h1"
            color="#0e185f"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "25px",
            }}
          >
            Platform Kolaborasi Anak Muda Indonesia
          </Typography>
          <img className={styles.heroImage} src={heroBanner} alt="" />
        </Box>
        <Button
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
      </Container>
    </>
  );
};

export default Hero;
