import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Button, Container, Input, Typography } from "@mui/material";
import UploadEventForm from "../components/forms/UploadEventForm";
import { styled } from "@mui/system";
import { AuthInput } from "../components/inputs/AuthInput";
import { VerificationForm } from "../containers/UploadEventContainer/VerificationForm";
import { VerificationStepTwo } from "../containers/UploadEventContainer/VerificationStepTwo";
import { VerificationStepOne } from "../containers/UploadEventContainer/VerificationStepOne";

const StyledInput = styled(Input)({
  backgroundColor: "white",
  borderRadius: 5,
});

const steps = [
  "VERIFICATION_STEP_ONE",
  "VERIFICATION_STEP_TWO",
  "VERIFICATION_FORM",
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

  const verificationPageSteps = () => {
    const step = steps[pageStep];
    console.log(step);

    switch (step) {
      case "VERIFICATION_STEP_ONE":
        return <VerificationStepOne onNext={handleNext} />;

      case "VERIFICATION_STEP_TWO":
        return (
          <VerificationStepTwo
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );

      case "VERIFICATION_FORM":
        return <VerificationForm onPrevious={handlePrevious} />;

      default:
    }
  };

  return (
    <>
      <Header bgColor={"#f4f4f4"} />
      <Box
        component="div"
        sx={{
          padding: "2em 3em",
          marginBottom: "3em",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Typography
          variant="h4"
          sx={{ display: "inline" }}
          fontWeight={600}
          color="#0e185f"
        >
          Upload Event
        </Typography>
        <Typography variant="h6" color="#0e185f">
          buat bantu anak muda kembangkan diri!
        </Typography>
      </Box>
      <Container
        fluid
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "50em",
            backgroundColor: "#f4f4f4",
            height: "auto",
            marginX: "5em",
            paddingY: "2em",
            paddingX: "2em",
            borderRadius: 5,
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3em",
            }}
          >
            <Typography variant="h5" fontWeight={600} color="#0e185f">
              Verify your account
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {verificationPageSteps()}
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default UploadEventPage;
