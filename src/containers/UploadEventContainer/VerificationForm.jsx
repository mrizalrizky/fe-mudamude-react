import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { BaseInput } from "../../components/inputs/BaseInput";
import ArrowButton from "../../components/button/ArrowButton";
import ArrowLeft from "../../assets/icons/ic_arrow_left.svg";
import VerifyButton from "../../components/button/VerifyButton";
import UploadIDBanner from "../../assets/images/upload_id.svg";
import axios from "axios";
import { decodeToken } from "../../utils/jwtDecode";

export const VerificationForm = ({ onPrevClick, onNextClick }) => {
  const [userData, setUserData] = useState({});
  const [fileImage, setFileImage] = useState(null);
  const fileElement = useRef(null);

  const fileUpload = () => {
    fileElement.current.click();
  };

  const onInputFileChange = async (e) => {
    const file = e.target.files[0] || null;
    const user = decodeToken(localStorage.getItem("token"));
    if (file) {
      const uploadFile = await axios.post(
        `${process.env.REACT_APP_API_URL}/files`,
        {
          filename: file?.name,
          current_path: window.location.pathname,
          id_user: user?.id,
        }
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onNextClick();
  };
  return (
    <Grid
      container
      sx={{
        width: "fit-content",
        gap: "2em",
        padding: "1em",
        borderRadius: 5,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Grid item>
        <Stack gap="2em">
          <Box item>
            <BaseInput
              label="Nama Lengkap"
              name="full_name"
              type="text"
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <BaseInput
              label="Tanggal Lahir"
              name="birthdate"
              type="date"
              onChange={handleInputChange}
            />
          </Box>
        </Stack>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="#0e185f" fontWeight={500}>
          Upload ID Card Kamu
        </Typography>
        <Box
          sx={{
            borderRadius: 5,
          }}
        >
          {/* <Button> */}
          <IconButton onClick={fileUpload}>
            <img
              src={fileImage ? fileImage : UploadIDBanner}
              alt="Upload ID Banner"
            />
          </IconButton>
          <input
            type="file"
            ref={fileElement}
            onChange={onInputFileChange}
            hidden
          />
        </Box>
        {/* <Typography variant="caption" color="#0e185f">
          *Informasi kamu akan tetap rahasia dan hanya digunakan untuk
          verifikasi.
        </Typography> */}
      </Grid>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <ArrowButton onClick={onPrevClick} icon={ArrowLeft} />
        <VerifyButton onClick={handleSubmit} />
      </Grid>
    </Grid>
  );
};
