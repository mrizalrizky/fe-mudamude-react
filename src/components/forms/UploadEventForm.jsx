import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import {
  LocalizationProvider,
  TimePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarIcon from "../../assets/icons/ic_calendar.svg";
import moment from "moment";

export default function UploadEventForm() {
  const [uploadBtnDisabled, setUploadBtnDisabled] = useState(true);
  const [eventData, setEventData] = useState({
    title: "",
    id_category: 1,
    description: "",
    benefit: "",
    organizer_name: "",
    eligibility: "",
    location: "",
    ticket_price: "",
    event_date: "",
    event_time: "",
    duration: "",
  });

  const handleTimeChange = (newTime) => {
    const event_time = newTime.format("HH:mm");
    setEventData((prevState) => ({
      ...prevState,
      event_time,
    }));
  };

  const handleDateChange = (newDate) => {
    const event_date = newDate.format("YYYY-MM-DD");
    setEventData((prevState) => ({
      ...prevState,
      event_date,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const hasEmptyField = Object.values(eventData).some(
      (value) => value === "" || value === null
    );
    setUploadBtnDisabled(hasEmptyField);
  }, [eventData]);

  const handleUpload = async () => {
    console.log(eventData);
    const postData = await axios.post(
      `${process.env.REACT_APP_API_URL}/event/upload`,
      eventData
    );
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "auto",
          marginTop: "3em",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "magenta",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "auto",
            flexDirection: "column",
            gap: "1em",
            padding: 5,
            borderRadius: 5,
            backgroundColor: "#f4f4f4",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "3em",
            }}
          >
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Title
              </Typography>
              <Input
                disableUnderline
                placeholder="Judul event"
                name="title"
                sx={{
                  borderRadius: 2,
                  padding: "0.5em 1em",
                  backgroundColor: "white",
                  color: "#0e185f",
                }}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Organizer
              </Typography>
              <Input
                disableUnderline
                placeholder="Nama penyelenggara"
                name="organizer_name"
                sx={{
                  borderRadius: 2,
                  padding: "0.5em 1em",
                  backgroundColor: "white",
                  color: "#0e185f",
                }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Box>
          <FormControl>
            <Typography variant="h6" color="#0e185f">
              Description
            </Typography>
            <Input
              disableUnderline
              multiline
              placeholder="Deskripsikan event kamu"
              rows={3}
              name="description"
              sx={{
                borderRadius: 2,
                padding: "0.5em 1em",
                width: "50%",
                backgroundColor: "white",
                color: "#0e185f",
              }}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <Typography variant="h6" color="#0e185f">
              Benefit
            </Typography>
            <Input
              disableUnderline
              placeholder="Apa yang didapat dari event anda"
              name="benefit"
              sx={{
                borderRadius: 2,
                padding: "0.5em 1em",
                width: "50%",
                backgroundColor: "white",
                color: "#0e185f",
              }}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <Typography variant="h6" color="#0e185f">
              Eligibility
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="eligibility"
              sx={{ display: "flex", flexDirection: "row" }}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
            </RadioGroup>
          </FormControl>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "3em",
            }}
          >
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "white",
                    color: "#0e185f",
                  }}
                  onChange={handleDateChange}
                  format="DD/MM/YYYY"
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Time
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "white",
                    color: "#0e185f",
                  }}
                  onChange={handleTimeChange}
                  ampm={false}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Duration
              </Typography>
              <Input
                disableUnderline
                placeholder="1h 20m"
                name="duration"
                sx={{
                  borderRadius: 2,
                  padding: "0.5em 1em",
                  backgroundColor: "white",
                  color: "#0e185f",
                }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "3em",
              marginBottom: "1em",
            }}
          >
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Location
              </Typography>
              <Input
                disableUnderline
                placeholder="Online"
                name="location"
                sx={{
                  borderRadius: 2,
                  padding: "0.5em 1em",
                  backgroundColor: "white",
                  color: "#0e185f",
                }}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h6" color="#0e185f">
                Ticket Price
              </Typography>
              <Input
                disableUnderline
                placeholder="0"
                name="ticket_price"
                sx={{
                  borderRadius: 2,
                  padding: "0.5em 1em",
                  backgroundColor: "white",
                  color: "#0e185f",
                }}
                onChange={handleInputChange}
                startAdornment={
                  <InputAdornment
                    position="start"
                    sx={{ color: "red", paddingLeft: 0.25 }}
                  >
                    <Typography variant="body1" color="#0e185f">
                      Rp
                    </Typography>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={handleUpload}
              disabled={uploadBtnDisabled}
              sx={{
                backgroundColor: "#0e185f",
                color: "white",
                borderRadius: 20,
                width: 125,
                padding: "0.5em 1.5em",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0e185f",
                  color: "white",
                },
                "&:disabled": {
                  color: "white",
                  opacity: "50%",
                },
              }}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
