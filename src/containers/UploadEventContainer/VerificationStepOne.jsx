import { Box, Typography } from "@mui/material";
import React from "react";
import VerifyAccountBanner from "../../assets/images/verify_account.svg";
import ArrowButton from "../../components/button/ArrowButton";
import ArrowRight from "../../assets/icons/ic_arrow_right.svg";

export const VerificationStepOne = ({ onNext }) => {
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
          Sebelum dapat mengupload event, kamu harus memverifikasi akun terlebih
          dahulu demi keamanan user kami.
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ArrowButton onClick={onNext} icon={ArrowRight} />
      </Box>
    </Box>
  );
};
