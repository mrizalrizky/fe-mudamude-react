import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AuthInput } from "../../components/inputs/AuthInput";
import ArrowButton from "../../components/button/ArrowButton";
import ArrowLeft from "../../assets/icons/ic_arrow_left.svg";
import VerifyButton from "../../components/button/VerifyButton";

export const VerificationForm = ({ onPrevious, onNext }) => {
  return (
    <>
      <Box component="div">
        <Box component="div" sx={{ display: "flex" }}>
          <Box component="div" sx={{ paddingLeft: "3em" }}>
            <AuthInput title="Nama Lengkap" name="full_name" />
            <AuthInput title="Tanggal Lahir" name="birth_date" />
          </Box>
          <Box
            component="div"
            sx={{
              marginLeft: "5em",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="#0e185f" fontWeight={500}>
              Upload ID Card Kamu
            </Typography>
            <Button></Button>
            <Typography
              sx={{ display: "flex", textAlign: "left" }}
              variant="subtitle2"
              color="#0e185f"
            >
              *Informasi kamu akan tetap rahasia dan hanya digunakan untuk
              verifikasi.
            </Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ArrowButton onClick={onPrevious} icon={ArrowLeft} />
          <VerifyButton onClick={onNext} />
        </Box>
      </Box>
    </>
  );
};
