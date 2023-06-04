import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BaseTabButton from "../../components/button/BaseTabButton";
import EventCard from "../../components/card/EventCard";
import axios from "axios";

export const UserEvent = () => {
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
