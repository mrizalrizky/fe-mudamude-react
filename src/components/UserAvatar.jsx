import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function UserAvatar(props) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: "2em",
      }}
    >
      <Avatar sx={{ width: 60, height: 60 }} />
      <Box
        component="div"
        sx={{
          width: "100%",
          paddingLeft: "1em ",
        }}
      >
        <Typography variant="h6" fontWeight={600} color={"#0e185f"}>
          {props.fullName}
        </Typography>
        <Typography variant="subtitle2" color={"#0e185f"}>
          {props.institution}
        </Typography>
      </Box>
    </Box>
  );
}
