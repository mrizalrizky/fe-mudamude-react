import React from "react";
import moment from "moment";
import { Box, Typography } from "@mui/material";
import CommentIcon from "../assets/icons/ic_comments.svg";

export default function CommentBox({ data }) {
  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        paddingLeft: "1em",
        marginBottom: "0.5em",
        gap: "1em",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Box component="div">
        <img src={CommentIcon} width={30} height={30} alt="Comment" />
      </Box>
      {/* VERSI 1 */}
      {/* <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption">{data.fullName}</Typography>

        <Typography variant="caption">
          {moment(data.createdAt).format("DD MMMM YY hh.mm A")}
        </Typography>
      </Box>
      <Typography variant="body1" color="#0e185f">
        {data.comment}
      </Typography> */}
      {/* VERSI 2 */}
      <Box
        component="div"
        sx={{
          display: "inline",
          marginBottom: "0.25em",
        }}
      >
        <Box component="div">
          <Typography variant="caption">
            {moment(data.createdAt).format("DD MMMM YYYY hh.mm A")} by
          </Typography>
          <Typography variant="caption" fontWeight={500} marginLeft={"0.25em"}>
            {data.fullName}
          </Typography>
        </Box>
        <Box component="div">
          <Typography variant="body1" color="#0e185f">
            {data.comment}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
