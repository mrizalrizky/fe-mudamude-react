import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import SearchIcon from "../../assets/icons/ic_search.svg";
import CalendarIcon from "../../assets/icons/ic_calendar.svg";
import LocationPinIcon from "../../assets/icons/ic_location_pin.svg";
import SquareDotIcon from "../../assets/icons/ic_square_dots.svg";
import PlusCircleOutlineIcon from "../../assets/icons/ic_plus_circle_outline.svg";
import { BaseInput } from "../inputs/BaseInput";

export default function SearchMenuBar() {
  const [searchData, setSearchData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid
      container
      sx={{
        width: "fit-content",
        padding: "1.25em 1.75em",
        borderRadius: 5,
        backgroundColor: "#0e185f",
        gap: "1.5em",
        alignSelf: "center",
      }}
    >
      <BaseInput
        type="text"
        name="event_name"
        placeholder="Cari event"
        icon={SearchIcon}
        iconAlt="Search icon"
        onChange={handleInputChange}
      />
      <BaseInput
        width={100}
        type="text"
        name="date"
        placeholder="Date"
        icon={CalendarIcon}
        iconAlt="Calendar icon"
        onChange={handleInputChange}
      />
      <BaseInput
        width={175}
        type="text"
        name="location"
        placeholder="Location"
        icon={LocationPinIcon}
        iconAlt="Location pin icon"
        onChange={handleInputChange}
      />
      <BaseInput
        width={150}
        type="text"
        name="category"
        placeholder="Category"
        icon={SquareDotIcon}
        iconAlt="Square dot icon"
        onChange={handleInputChange}
      />

      <Button
        sx={{
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
    </Grid>
  );
}
