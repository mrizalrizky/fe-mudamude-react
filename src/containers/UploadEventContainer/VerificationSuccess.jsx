import React from "react";
import VerifySuccessBanner from "../../assets/images/verify_success.png";
import { Box, Typography } from "@mui/material";
import ArrowButton from "../../components/button/ArrowButton";
import ArrowRight from "../../assets/icons/ic_arrow_right.svg";

export const VerificationSuccess = ({ onNext }) => {
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
        <img src={VerifySuccessBanner} alt="Verify Success Banner" />
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
          Data kamu telah kami terima, sekarang kamu bisa upload event kamu di
          MudaMude!
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
