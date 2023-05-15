import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import moment from "moment";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBanner from "../assets/images/banner.png";
import LocationIcon from "../assets/icons/ic_location.svg";
import CalendarIcon from "../assets/icons/ic_calendar.svg";
import OrganizerIcon from "../assets/icons/ic_organizer.svg";
import CrossedCalendarIcon from "../assets/icons/ic_calendar_cross.svg";
import { styled } from "@mui/system";

const BasicButton = styled(Button)({
  backgroundColor: "#f4f4f4",
  color: "#0e185f",
  borderRadius: 20,
  width: 125,
  padding: "0.5em 1.5em",
  "&:active": {
    backgroundColor: "#0e185f",
    color: "white",
  },
});

const EventDetailPage = () => {
  const { slug } = useParams();
  return (
    <>
      <Header />
      <Box component="div" sx={{ backgroundColor: "red", paddingX: 30 }}>
        <Box component="div" sx={{ backgroundColor: "yellow" }}>
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            Stress Management
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            height: "auto",
            paddingY: "1em",
            backgroundColor: "magenta",
            display: "flex",
          }}
        >
          <Box
            component="div"
            sx={{
              width: 1000,
              height: 500,
              borderRadius: 5,
              marginRight: "2em",
              backgroundColor: "#d81",
              objectFit: "cover",
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="Event Banner"
            />
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor: "#f4f4f4",
              paddingX: "1em",
              paddingY: "1em",
              width: 300,
              height: 245,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="body2"
              color="#0e185f"
              fontWeight={600}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Webinar
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75em",
                marginX: "2.5em",
                marginY: "1.25em",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <img src={LocationIcon} alt="Location Icon" />
                <Typography variant="caption" fontWeight={600} color="#0e185f">
                  Online
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <img src={CalendarIcon} alt="Calendar Icon" />
                <Typography variant="caption" fontWeight={600} color="#0e185f">
                  {moment("2023-04-05").format("DD MMMM YYYY")}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <img src={OrganizerIcon} alt="Organizer Icon" />
                <Typography variant="caption" fontWeight={600} color="#0e185f">
                  Online
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                href="http://meet.google.com"
                sx={{
                  borderRadius: 20,
                  padding: "0.75em 3em",
                  backgroundColor: "#0e185f",
                  color: "white",
                }}
              >
                Join Meetings
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: "1em",
            marginBottom: "1em",
          }}
        >
          <BasicButton>Description</BasicButton>
          <BasicButton>Details</BasicButton>
        </Box>
        <Box component="div">
          <Typography variant="h6">Event Details</Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75em",
              marginY: "1.25em",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <img src={LocationIcon} alt="Location Icon" />
              <Typography variant="caption" fontWeight={600} color="#0e185f">
                Location: Online
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <img src={CalendarIcon} alt="Calendar Icon" />
              <Typography variant="caption" fontWeight={600} color="#0e185f">
                Date : {moment("2023-04-05").format("DD MMMM YYYY")}
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <img src={OrganizerIcon} alt="Organizer Icon" />
              <Typography variant="caption" fontWeight={600} color="#0e185f">
                Organizer : UGM
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <img src={CrossedCalendarIcon} alt="Organizer Icon" />
              <Typography variant="caption" fontWeight={600} color="#0e185f">
                Registration Deadline :{" "}
                {moment("20220930").format("DD MMMM YYYY")}
              </Typography>
            </Box>
          </Box>
          <Box component="div" sx={{ marginBottom: "2em" }}>
            <Typography variant="h6">Benefits</Typography>
            <Box component="div">
              <Typography variant="body1">TESTT</Typography>
              <Typography variant="body1">TESTT</Typography>
              <Typography variant="body1">TESTT</Typography>
            </Box>
          </Box>
          <Box component="div">
            <Typography variant="h6">Eligibility</Typography>
            <Typography variant="body1">TESTT</Typography>
            <Typography variant="body1">TESTT</Typography>
            <Typography variant="body1">TESTT</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EventDetailPage;
