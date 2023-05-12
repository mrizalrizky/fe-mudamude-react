import React from "react";
import { Box, Typography } from "@mui/material";
import CommentIcon from "../assets/icons/ic_comments.svg";

export default function CommentBox({ data }) {
  return (
    <Box
      component="div"
      sx={{
        height: "3em",
        paddingLeft: "1em",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        gap: "1em",
      }}
    >
      <img src={CommentIcon} width={30} height={30} alt="Comment" />
      <Typography variant="body1" color="#0e185f">
        {data.comment}
      </Typography>
    </Box>
  );
}
