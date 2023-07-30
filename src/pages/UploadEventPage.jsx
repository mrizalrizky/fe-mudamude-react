import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import VerifySuccessBanner from "../assets/images/verify_success.png";
import DocumentBanner from "../assets/images/document_banner.svg";
import Breadcrumb from "../components/Breadcrumb";
import ArrowButton from "../components/button/ArrowButton";
import ArrowLeft from "../assets/icons/ic_arrow_left.svg";
import ArrowRight from "../assets/icons/ic_arrow_right.svg";

const steps = [
  {
    description:
      "Sebelum dapat mengupload event, kamu harus memverifikasi akun terlebih dahulu demi keamanan user kami.",
    key: "VERIFICATION_STEP_ONE",
  },
  {
    description:
      "Informasi kamu akan tetap rahasia dan hanya digunakan untuk verifikasi",
    key: "VERIFICATION_STEP_TWO",
  },
  {
    description: "",
    key: "VERIFICATION_FORM",
  },
  {
    description:
      "Data kamu telah kami terima. Sekarang kamu bisa upload event kamu di MudaMude!",
    key: "VERIFICATION_SUCCESS",
  },
];

const UploadEventPage = () => {
  const [pageStep, setPageStep] = useState(0);

  const handleNext = () => {
    if (pageStep < steps.length - 1) {
      setPageStep(pageStep + 1);
    }
  };

  const handlePrevious = () => {
    if (pageStep > 0) {
      setPageStep(pageStep - 1);
    }
  };

  return (
    <>
      <Header bgColor={"#f4f4f4"} />
      <Breadcrumb
        pageTitle="Upload Event"
        pageDescription="buat bantu anak muda kembangkan diri!"
      />
      <Container
        sx={{
          paddingY: "2em",
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
          textAlign: "center",
        }}
      >
        <Stack sx={{ gap: "3em" }}>
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            Verify your account
          </Typography>
          <Box>
            <img
              src={pageStep !== 3 ? DocumentBanner : VerifySuccessBanner}
              alt="Verification banner"
            />
          </Box>
          <Typography variant="body1" fontWeight={500} color="#0e185f">
            Sebelum dapat mengupload event, kamu harus memverifikasi akun
            terlebih dahulu demi keamanan user kami.
          </Typography>
          <Grid container sx={{ justifyContent: "space-between" }}>
            {console.log("pageStep", pageStep !== 0)}
            {(pageStep === 1 || pageStep !== 2) && (
              <ArrowButton icon={ArrowLeft} />
            )}
            <ArrowButton icon={ArrowRight} />
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default UploadEventPage;
