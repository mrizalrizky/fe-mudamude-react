import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardCard from "../components/card/DashboardCard";
import EventCard from "../components/card/EventCard";
import axios from "axios";
import { styled } from "@mui/system";
import BaseTabButton from "../components/button/BaseTabButton";

const UserEventPage = () => {
  const [pageComponent, setPageComponent] = useState("USER_UPLOADED_EVENTS");
  const [eventList, setEventList] = useState([]);
  const getUserUploadedEventList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/uploaded-events?username=putriaap`
      );
      setEventList(res.data.data);
    } catch (error) {
      console.log("error:> ", error);
    }
  };

  const getUserRegisteredEventList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/registered-events?username=putriaap`
      );
      setEventList(res.data.data);
    } catch (error) {
      console.log("error:> ", error);
    }
  };

  useEffect(() => {
    switch (pageComponent) {
      case "USER_UPLOADED_EVENTS":
        getUserUploadedEventList();
        break;

      case "USER_REGISTERED_EVENTS":
        getUserRegisteredEventList();
        break;

      default:
        break;
    }
  }, [pageComponent]);

  return (
    <>
      <Header />
      <Box component="div" sx={{ marginX: "5em", display: "flex" }}>
        <DashboardCard />
        <Box
          component="div"
          sx={{
            width: "100%",
          }}
        >
          <Box component="div" sx={{ marginLeft: "7.5em" }}>
            <Box component="div" sx={{ marginBottom: "2.5em" }}>
              <Typography variant="h5" color="#0e185f" fontWeight={700}>
                Event
              </Typography>
              <Typography variant="caption" color="#0e185f" fontSize="18px">
                Kelola event yang sudah kamu upload dan ikuti
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor: "#0e185f",
                  borderRadius: 5,
                  padding: "1.25em 1.75em 1.25em 1.75em",
                  display: "flex",
                  marginRight: "2px",
                }}
              >
                <BaseTabButton
                  title="Uploaded"
                  variant="contained"
                  isActive={pageComponent === "USER_UPLOADED_EVENTS"}
                  onClick={() => {
                    setPageComponent("USER_UPLOADED_EVENTS");
                  }}
                />
                <BaseTabButton
                  title="Registered"
                  variant="contained"
                  isActive={pageComponent === "USER_REGISTERED_EVENTS"}
                  onClick={() => {
                    setPageComponent("USER_REGISTERED_EVENTS");
                  }}
                />
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "5em",
                paddingTop: "3em",
                marginBottom: "2em",
                flexWrap: "wrap",
                // backgroundColor: "pink",
              }}
            >
              {eventList.length > 0 ? (
                eventList.map((data) => {
                  return <EventCard key={data.id_event} data={data} />;
                })
              ) : (
                <p>No events</p>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default UserEventPage;
