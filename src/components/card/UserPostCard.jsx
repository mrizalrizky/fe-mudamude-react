import React from "react";
import { Box, Button, Typography } from "@mui/material";
import UserAvatar from "../UserAvatar";

export default function UserPostCard({ data }) {
  return (
    <Box
      component="div"
      sx={{
        width: 345,
        height: "auto",
        borderRadius: 5,
        backgroundColor: "#f4f4f4",
        padding: "1.5em 2em",
      }}
    >
      <Box component="div">
        <UserAvatar fullName={data.fullName} institution={data.institution} />
        <Box
          component="div"
          sx={{
            width: "100%",
            height: 100,
            padding: "1em 1em",
            overflow: "hidden",
            wordWrap: "break-word",
            textJustify: "auto",
          }}
        >
          <Typography variant="body1" color="#0e185f">
            {data.content.length < 80
              ? data.content
              : data.content
                  .substring(0, data.content.length - 20)
                  .concat("...")}
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            href={`posts/${data.slug}/detail`}
            sx={{
              width: "auto",
              borderRadius: 5,
              padding: "0.25em 0.75em",
              display: "inline-flex",
              backgroundColor: "#0e185f",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e185f",
              },
            }}
          >
            <Typography variant="caption" color="white">
              Read More
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
