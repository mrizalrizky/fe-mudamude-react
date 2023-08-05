import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function UserAvatar(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1em",
      }}
    >
      <Avatar sx={{ width: 60, height: 60 }} />
      <Box>
        <Typography variant="h6" fontWeight={600} color={"#0e185f"}>
          {props.fullName ?? "-"}
        </Typography>
        <Typography variant="subtitle1" color={"#0e185f"}>
          {props.institution ?? "-"}
        </Typography>
      </Box>
    </Box>
  );
}
