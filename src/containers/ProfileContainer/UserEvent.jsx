import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "../../components/card/EventCard";
import axios from "axios";
import BaseMenuBar from "../../components/menubar/BaseMenuBar";

export const UserEvent = ({ data }) => {
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
        `${process.env.REACT_APP_API_URL}/profile/uploaded-events?username=${data.username}`
      );
      setEventList(res.data.data);
    } catch (error) {
      console.log("error:> ", error);
    }
  };

  const getUserRegisteredEventList = async () => {
    console.log(data);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/registered-events?username=${data.username}}`
      );

      if (response && response.data.data) {
        setEventList(response.data.data);
      }
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
          marginBottom: "3em",
        }}
      >
        <BaseMenuBar
          menuItems={menuItems}
          currentPageComponent={pageComponent}
          onPageComponentChange={setPageComponent}
        />
      </Grid>

      <Grid container sx={{ justifyContent: "space-between" }}>
        {eventList.length > 0 ? (
          eventList.map((data) => {
            return (
              <Grid item sx={{ marginBottom: "2.5em" }}>
                <EventCard key={data.id_event} data={data} />
              </Grid>
            );
          })
        ) : (
          <p>No events</p>
        )}
      </Grid>
    </>
  );
};
