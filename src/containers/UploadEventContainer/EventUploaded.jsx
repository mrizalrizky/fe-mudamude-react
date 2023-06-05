import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import EventUploadedBanner from "../../assets/images/event_uploaded.png";
import { useNavigate } from "react-router-dom";

export const EventUploaded = () => {
  const navigate = useNavigate();

  return (
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
            Event Uploaded!
          </Typography>
        </Box>
        <Box component="div">
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3em",
            }}
          >
            <img src={EventUploadedBanner} alt="Verify Account Banner" />
          </Box>
          <Box
            component="div"
            sx={{
              marginX: "3em",
              marginBottom: "1.5em",
              textAlign: "center",
              textWrap: "auto",
            }}
          >
            <Typography variant="body1" fontWeight={500} color="#0e185f">
              Event kamu berhasil terupload di MudaMude
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              component="div"
              sx={{
                backgroundColor: "#0e185f",
                color: "white",
                textTransform: "none",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25em",
                paddingX: "2.5em",
                borderRadius: 5,
                "&:hover": {
                  backgroundColor: "#0e185f",
                  color: "white",
                },
              }}
              onClick={() => {
                navigate("/event");
              }}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
