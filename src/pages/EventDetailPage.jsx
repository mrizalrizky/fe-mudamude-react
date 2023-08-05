import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import moment from "moment";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationPinIcon from "../assets/icons/ic_location_pin.svg";
import CalendarIcon from "../assets/icons/ic_calendar.svg";
import OrganizerIcon from "../assets/icons/ic_organizer.svg";
import { styled } from "@mui/system";
import axios from "axios";
import EventDescription from "../containers/EventsContainer/EventDescription";
import EventDetails from "../containers/EventsContainer/EventDetails";

const BaseButton = styled(Button)({
  borderRadius: 20,
  width: 125,
  padding: "0.5em 1.5em",
  backgroundColor: "#f4f4f4",
  color: "#0e185f",
});

const EventDetailPage = () => {
  const { slug } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  const [pageComponent, setPageComponent] = useState("EVENT_DESCRIPTION");

  useEffect(() => {
    const getEventDetails = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/${slug}/detail`
      );
      setEventDetails(res.data.data);
    };
    getEventDetails();
  }, []);
  return (
    <>
      <Header />
      <Box component="div" sx={{ paddingX: 20 }}>
        <Box component="div">
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            {eventDetails.title}
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            height: "auto",
            paddingY: "1em",
            display: "flex",
            justifyContent: "center",
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
          />
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
              {eventDetails.category_name}
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
                <img src={LocationPinIcon} alt="Location Icon" />
                <Typography variant="caption" fontWeight={600} color="#0e185f">
                  {eventDetails.location}
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
                  {moment(eventDetails.event_date).format("DD MMMM YYYY")}
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
                  {eventDetails.location}
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
            marginBottom: "2em",
          }}
        >
          <BaseButton
            sx={{
              color: pageComponent === "EVENT_DESCRIPTION" && "white",
              backgroundColor:
                pageComponent === "EVENT_DESCRIPTION" && "#0e185f",
              "&:hover": {
                color: pageComponent === "EVENT_DESCRIPTION" && "white",
                backgroundColor:
                  pageComponent === "EVENT_DESCRIPTION" && "#0e185f",
              },
            }}
            onClick={() => {
              setPageComponent("EVENT_DESCRIPTION");
            }}
          >
            Description
          </BaseButton>
          <BaseButton
            sx={{
              color: pageComponent === "EVENT_DETAILS" && "white",
              backgroundColor: pageComponent === "EVENT_DETAILS" && "#0e185f",
              "&:hover": {
                color: pageComponent === "EVENT_DETAILS" && "white",
                backgroundColor: pageComponent === "EVENT_DETAILS" && "#0e185f",
              },
            }}
            onClick={() => {
              setPageComponent("EVENT_DETAILS");
            }}
          >
            Details
          </BaseButton>
        </Box>
        {pageComponent === "EVENT_DESCRIPTION" && (
          <EventDescription description={eventDetails.description} />
        )}
        {pageComponent === "EVENT_DETAILS" && (
          <EventDetails
            location={eventDetails.location}
            eventDate={eventDetails.event_date}
            eventTime={eventDetails.event_time}
            organizerName={eventDetails.organizer_name}
          />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default EventDetailPage;
