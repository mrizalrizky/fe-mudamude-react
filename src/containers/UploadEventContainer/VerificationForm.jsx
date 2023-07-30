import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { BaseInput } from "../../components/inputs/BaseInput";
import ArrowButton from "../../components/button/ArrowButton";
import ArrowLeft from "../../assets/icons/ic_arrow_left.svg";
import VerifyButton from "../../components/button/VerifyButton";

export const VerificationForm = ({ onPrevious, onNext }) => {
  return (
    <>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <BaseInput label="Nama Lengkap" />
          <BaseInput label="Tanggal Lahir" />
        </Grid>
        <Grid item>
          <Typography variant="h6" color="#0e185f" fontWeight={500}>
            Upload ID Card Kamu
          </Typography>
          <Button></Button>
          <Typography variant="subtitle2" color="#0e185f">
            *Informasi kamu akan tetap rahasia dan hanya digunakan untuk
            verifikasi.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <ArrowButton onClick={onPrevious} icon={ArrowLeft} />
        <VerifyButton onClick={onNext} />
      </Grid>
    </>
  );
};
