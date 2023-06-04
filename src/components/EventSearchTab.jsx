import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import SearchIcon from "../assets/icons/ic_search.svg";
import CalendarIcon from "../assets/icons/ic_calendar.svg";
import LocationIcon from "../assets/icons/ic_location.svg";
import CategoryIcon from "../assets/icons/ic_square_dots.svg";
import PlusCircleOutlineIcon from "../assets/icons/ic_plus_circle_outline.svg";

export default function EventSearchTab() {
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-1em",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            backgroundColor: "#0e185f",
            borderRadius: 5,
            padding: "1.25em 1.75em",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "1.5em",
              borderRadius: 2,
            }}
          >
            <Box
              component="div"
              sx={{
                borderRadius: 2,
                paddingX: "0.5em",
                paddingY: "0.25em",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Input disableUnderline placeholder="Cari event" />
              <img
                src={SearchIcon}
                width={16}
                height={16}
                style={{ marginLeft: "0.5em" }}
                alt="Search"
              />
            </Box>
            <Box
              component="div"
              sx={{
                width: 100,
                height: "auto",
                borderRadius: 2,
                paddingX: "0.5em",
                paddingY: "0.25em",
                backgroundColor: "white",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Input disableUnderline placeholder="Date" />
              <img
                src={CalendarIcon}
                width={16}
                height={16}
                style={{ marginLeft: "0.5em" }}
                alt="Date"
              />
            </Box>
            <Box
              component="div"
              sx={{
                width: 175,
                borderRadius: 2,
                paddingX: "0.5em",
                paddingY: "0.25em",
                backgroundColor: "white",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Input disableUnderline placeholder="Location" />
              <img
                src={LocationIcon}
                width={16}
                height={16}
                style={{ marginLeft: "0.5em" }}
                alt="Location"
              />
            </Box>
            <Box
              component="div"
              sx={{
                width: 150,
                borderRadius: 2,
                paddingX: "0.5em",
                paddingY: "0.25em",
                backgroundColor: "white",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Input disableUnderline placeholder="Category" />
              <img
                src={CategoryIcon}
                width={16}
                height={16}
                style={{ marginLeft: "0.5em" }}
                alt="Category"
              />
            </Box>
          </Box>
          <Button
            sx={{
              marginLeft: "0.75em",
              padding: 0,
            }}
            href="/upload-event"
          >
            <img
              src={PlusCircleOutlineIcon}
              width={35}
              height={35}
              alt="Add Post"
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}
