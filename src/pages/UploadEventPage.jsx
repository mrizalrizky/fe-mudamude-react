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
import { VerificationForm } from "../containers/UploadEventContainer/VerificationForm";
import UploadEventForm from "../containers/UploadEventContainer/UploadEventForm";
import { decodeToken } from "../utils/jwtDecode";

const steps = [
  {
    id: 0,
    description:
      "Sebelum dapat mengupload event, kamu harus memverifikasi akun terlebih dahulu demi keamanan user kami.",
    key: "VERIFICATION_STEP_ONE",
  },
  {
    id: 1,
    description:
      "Informasi kamu akan tetap rahasia dan hanya digunakan untuk verifikasi",
    key: "VERIFICATION_STEP_TWO",
  },
  {
    id: 2,
    description: "",
    key: "VERIFICATION_FORM",
  },
  {
    id: 3,
    description:
      "Data kamu telah kami terima. Sekarang kamu bisa upload event kamu di MudaMude!",
    key: "VERIFICATION_SUCCESS",
  },
  {
    id: 4,
    description: "TEST",
    key: "UPLOAD_EVENT_FORM",
  },
];

const UploadEventPage = () => {
  const user = decodeToken(localStorage.getItem("token"));
  const [pageStep, setPageStep] = useState(
    user?.verified_flag === 0 ? steps[0] : steps[4]
  );

  const handleNext = () => {
    if (pageStep.id < steps.length - 1) {
      setPageStep(steps[pageStep.id + 1]);
    }
  };

  const handlePrevious = () => {
    if (pageStep.id > 0) {
      setPageStep(steps[pageStep.id - 1]);
    }
  };

  return (
    <>
      <Header bgColor={"#f4f4f4"} />
      <Breadcrumb
        pageTitle="Upload Event"
        pageDescription="buat bantu anak muda kembangkan diri!"
      />
      {/* <Container
        sx={{
          // display: "flex",
          // justifyContent: "center",
          backgroundColor: "magenta",
        }}
      > */}
      <Container
        sx={{
          width: "fit-content",
          paddingY: "2em",
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
          // textAlign: "center",
        }}
      >
        {pageStep.key === steps[2].key ? (
          <VerificationForm
            onPrevClick={handlePrevious}
            onNextClick={handleNext}
          />
        ) : pageStep.key === steps[4].key ? (
          <UploadEventForm />
        ) : (
          <Stack sx={{ gap: "3em", textAlign: "center" }}>
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              Verify your account
            </Typography>
            <Box>
              <img
                src={
                  pageStep.key !== steps[3].key
                    ? DocumentBanner
                    : VerifySuccessBanner
                }
                alt="Verification banner"
              />
            </Box>
            <Typography variant="body1" fontWeight={500} color="#0e185f">
              {pageStep.description}
            </Typography>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid item>
                {pageStep.key !== steps[0].key &&
                  pageStep.key !== steps[3].key && (
                    <ArrowButton icon={ArrowLeft} onClick={handlePrevious} />
                  )}
              </Grid>
              <Grid item>
                <ArrowButton icon={ArrowRight} onClick={handleNext} />
              </Grid>
            </Grid>
          </Stack>
        )}
      </Container>
      {/* </Container> */}
      <Footer />
    </>
  );
};

export default UploadEventPage;
