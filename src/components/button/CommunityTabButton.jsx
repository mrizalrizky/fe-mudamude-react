import React, { useState } from "react";
import {
  Dialog,
  Typography,
  Box,
  Button,
  Input,
  FormControl,
} from "@mui/material";
// import { Button } from '@mui/base'
import PlusCircleOutlineIcon from "../../assets/icons/ic_plus_circle_outline.svg";
import PostDialog from "../dialog/PostDialog";
import UserAvatar from "../../components/UserAvatar";
import { useLocation } from "react-router";
import axios from "axios";

export default function CommunityTabButton() {
  const [postContent, setPostContent] = useState("");
  const [postUrl, setPostUrl] = useState("");

  const [open, setOpen] = useState(false);
  const pathName = useLocation().pathname;

  const handleSubmitPost = async () => {
    const postData = {
      id_user: 1,
      content: postContent,
      url: postUrl,
    };
    await axios.post(`${process.env.REACT_APP_API_URL}/posts`, postData);
  };

  const handleDialogOpen = () => {
    console.log(pathName);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-1.5em",
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
        <a
          href="/community"
          onClick={() => {
            console.log(pathName);
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#0e185f",
              borderRadius: 2,
              padding: "0.25em 1em 0.25em 1em",
              marginLeft: "0.25em",
            }}
          >
            <Typography variant="subtitle2" color={"white"} fontWeight={600}>
              Belajar Bareng
            </Typography>
          </Box>
        </a>
        <Box
          component="div"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            marginLeft: "0.25em",
            padding: "0.25em 1em 0.25em 1em",
          }}
        >
          <Typography variant="body2" color={"#0e185f"} fontWeight={600}>
            Tips & Artikel
          </Typography>
        </Box>

        {pathName === "/articles" ? <PostDialog /> : ""}
        <Button onClick={handleDialogOpen} sx={{ margin: 0, padding: 0 }}>
          <Box component="div" padding={0}>
            <img
              src={PlusCircleOutlineIcon}
              width={25}
              height={25}
              alt="Add Post"
            />
          </Box>
        </Button>
        <FormControl>
          <Dialog open={open}>
            <Box
              component="div"
              sx={{
                backgroundColor: "#f4f4f4",
                padding: "1em 2.5em",
                borderRadius: 5,
                width: 500,
                height: 400,
              }}
            >
              <Box component="div" sx={{ paddingBottom: "1em" }}>
                <UserAvatar
                  fullName="Evelyn" // di get dari current user login
                  institution="Institut Teknologi Bandung"
                />
              </Box>
              <Box
                component="div"
                sx={{
                  paddingBottom: "1em",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="#0e185f"
                  fontWeight={500}
                >
                  Mau sharing apa?
                </Typography>
                <Box component="div" sx={{ height: 100 }}>
                  <Input
                    onChange={(e) => {
                      console.log(e.target.value);
                      setPostContent(e.target.value);
                    }}
                    disableUnderline
                    fullWidth
                    multiline
                    sx={{
                      backgroundColor: "white",
                      height: "100%",
                      borderRadius: 3,
                      padding: "1em",
                    }}
                    placeholder="Tulis di sini..."
                  />
                </Box>
              </Box>
              <Box component="div" sx={{ paddingBottom: "0.5em" }}>
                <Typography
                  variant="subtitle1"
                  color="#0e185f"
                  fontWeight={500}
                >
                  Link #BelajarBareng
                </Typography>
                <Input
                  onChange={(e) => {
                    setPostUrl(e.target.value);
                  }}
                  disableUnderline
                  sx={{
                    width: 250,
                    borderRadius: 20,
                    backgroundColor: "white",
                    paddingX: "1em",
                    paddingY: "0.5em",
                  }}
                  placeholder="Link meeting"
                />
              </Box>
              <Box
                component="div"
                sx={{
                  height: 30,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "0.5em",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.25em",
                    borderRadius: 5,
                    backgroundColor: "white",
                  }}
                >
                  <Button onClick={handleDialogClose}>
                    <Typography variant="caption" color="#ec2424">
                      Discard
                    </Typography>
                  </Button>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    backgroundColor: "#0e185f",
                  }}
                >
                  <Button onClick={handleSubmitPost}>
                    <Typography variant="caption" color="white">
                      Send
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Dialog>
        </FormControl>
      </Box>
    </Box>
  );
}
