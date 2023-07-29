import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BaseTabButton from "../../components/button/BaseTabButton";
import EventCard from "../../components/card/EventCard";
import axios from "axios";
import BaseMenuBar from "../../components/menubar/BaseMenuBar";

export const UserEvent = () => {
  const [pageComponent, setPageComponent] = useState("USER_UPLOADED_EVENTS");
  const [eventList, setEventList] = useState([]);

  const menuItems = [
    {
      label: "Uploaded",
      key: "USER_UPLOADED_EVENTS",
    },
    {
      label: "Registered",
      key: "USER_REGISTERED_EVENTS",
    },
  ];

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
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BaseMenuBar menuItems={menuItems} />
      </Grid>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5em",
          paddingTop: "3em",
          marginBottom: "2em",
          flexWrap: "wrap",
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
    </>
  );
};
