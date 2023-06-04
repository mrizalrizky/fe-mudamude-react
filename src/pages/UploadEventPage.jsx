import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import UploadEventForm from "../components/forms/UploadEventForm";

const UploadEventPage = () => {
  return (
    <>
      <Header bgColor={"#f4f4f4"} />
      <Box
        component="div"
        sx={{ padding: "2em 3em", backgroundColor: "#f4f4f4" }}
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
      <UploadEventForm />
      <Footer />
    </>
  );
};

export default UploadEventPage;
