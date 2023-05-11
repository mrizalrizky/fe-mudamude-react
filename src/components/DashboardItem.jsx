import React from "react";
import { Box, styled } from "@mui/system";
import { Paper, ThemeProvider, createTheme, Typography } from "@mui/material";

import clockIcon from "../assets/icons/ic_clock.svg";

const theme = createTheme({
  pallete: {
    primary: {
      main: "#0e185f",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  //   ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "12em",
  marginLeft: "20px",
  marginRight: "20px",
  marginBottom: "0.5em",
  height: "3.5em",
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  borderRadius: "15px",
}));

export default function DashboardItem(props) {
  return (
    <ThemeProvider theme={theme}>
      <Item>
        <img
          src={props.image}
          width={45}
          height={45}
          className="mx-1"
          alt="Icon"
        />
        <Typography variant="h6" color={"#0e185f"} fontWeight={600}>
          {props.title}
        </Typography>
      </Item>
    </ThemeProvider>
  );
}
