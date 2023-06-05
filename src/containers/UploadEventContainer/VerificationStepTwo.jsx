import React from "react";
import { Box, Typography } from "@mui/material";
import VerifyAccountBanner from "../../assets/images/verify_account.svg";
import ArrowButton from "../../components/button/ArrowButton";
import ArrowLeft from "../../assets/icons/ic_arrow_left.svg";
import ArrowRight from "../../assets/icons/ic_arrow_right.svg";

export const VerificationStepTwo = ({ onPrevious, onNext }) => {
  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3em",
        }}
      >
        <img src={VerifyAccountBanner} alt="Verify Account Banner" />
      </Box>
      <Box
        component="div"
        sx={{
          marginX: "5em",
          marginBottom: "1.5em",
          textAlign: "center",
          textWrap: "auto",
        }}
      >
        <Typography variant="body1" fontWeight={500} color="#0e185f">
          Informasi kamu akan tetap rahasia dan hanya digunakan untuk
          verifikasi.
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ArrowButton onClick={onPrevious} icon={ArrowLeft} />
        <ArrowButton onClick={onNext} icon={ArrowRight} />
      </Box>
    </Box>
  );
};
