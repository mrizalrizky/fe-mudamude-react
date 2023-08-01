import React from "react";
import moment from "moment";
import { Box, Typography } from "@mui/material";
import BubbleChatIcon from "../assets/icons/ic_comments.svg";

export default function CommentBox({ dataComment }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        padding: "0.5em 1em",
        display: "flex",
        gap: "1em",
        alignItems: "center",
      }}
    >
      <Box>
        <img
          src={BubbleChatIcon}
          width={30}
          height={30}
          alt="Bubble Chat Icon"
        />
      </Box>
      <Box>
        <Typography variant="caption">
          {moment(dataComment.createdAt).format("DD MMMM YYYY hh.mm A")} by
        </Typography>
        <Typography variant="caption" fontWeight={500} marginLeft={"0.25em"}>
          {dataComment.fullName}
        </Typography>
        <Typography variant="body1" color="#0e185f">
          {dataComment.comment}
        </Typography>
      </Box>
    </Box>
  );
}
