import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import LocationPinIcon from "../../assets/icons/ic_location_pin.svg";
import CalendarIcon from "../../assets/icons/ic_calendar.svg";
import OrganizerIcon from "../../assets/icons/ic_organizer.svg";
import CrossedCalendarIcon from "../../assets/icons/ic_calendar_cross.svg";
import moment from "moment";

export default function EventDetails({
  location,
  eventDate,
  eventTime,
  organizerName,
}) {
  return (
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
          <img src={LocationPinIcon} alt="Location Icon" />
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
            {moment(eventDate).format("DD MMMM YYYY") +
              " " +
              moment(eventTime).format("HH:mm") +
              " WIB"}
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
            {organizerName}
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
            Registration Deadline : {moment("20220930").format("DD MMMM YYYY")}
          </Typography>
        </Box>
      </Box>
      <Box component="div" sx={{ marginBottom: "2em" }}>
        <Typography variant="h6">Benefits</Typography>
        {/* <Box component="div"> */}
        <List>
          <ListItem>Test</ListItem>
          <ListItem>Test</ListItem>
          <ListItem>Test</ListItem>
        </List>
        <Typography variant="body1">TESTT</Typography>
        <Typography variant="body1">TESTT</Typography>
        <Typography variant="body1">TESTT</Typography>
        {/* </Box> */}
      </Box>
      <Box component="div">
        <Typography variant="h6">Eligibility</Typography>
        <Typography variant="body1">TESTT</Typography>
        <Typography variant="body1">TESTT</Typography>
        <Typography variant="body1">TESTT</Typography>
      </Box>
    </Box>
  );
}
