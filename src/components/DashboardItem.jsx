import React from "react";
import { styled } from "@mui/system";
import { Paper, ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
  pallete: {
    primary: {
      main: "#0e185f",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "f4f4f4",
  backgroundColor: "#f4f4f4",
  color: theme.pallete.primary.main,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "13.5em",
  marginLeft: "20px",
  marginRight: "20px",
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
          width={30}
          height={45}
          className="mx-2 me-3"
          alt="Icon"
        />
        <Typography variant="h6" fontWeight={600}>
          {props.title}
        </Typography>
      </Item>
    </ThemeProvider>
  );
}
