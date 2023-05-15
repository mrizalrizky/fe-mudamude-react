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
      <Box component="div" sx={{paddingX: 20}}>
        <Box component="div">
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            Stress Management
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            height: "auto",
            paddingY: "1em",
            display: "flex",
            justifyContent: 'center',
          }}
        >
          <Box
            component="div"
            sx={{
              width: 1000,
              height: 500,
              borderRadius: 5,
              marginRight: "2em",
              backgroundImage: `url("https://img.freepik.com/free-psd/banner-template-concert_23-2148403186.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
