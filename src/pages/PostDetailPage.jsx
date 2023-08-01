import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Container,
  Typography,
  Input,
  Button,
  Grid,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import UserAvatar from "../components/UserAvatar";
import ThreeDotVerticalIcon from "../assets/icons/ic_dot_three_vertical.svg";
import ThumbUpIcon from "../assets/icons/ic_thumb_up.svg";
import ThumbDownIcon from "../assets/icons/ic_thumb_down.svg";
import BubbleChatIcon from "../assets/icons/ic_comments.svg";
import SendIcon from "../assets/icons/ic_send.svg";
import CommentBox from "../components/CommentBox";
import { useParams } from "react-router";

const PostDetailPage = () => {
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [postRepliesList, setPostRepliesList] = useState([]);

  const getPostDetails = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/posts/${slug}/detail`
    );
    setPostDetail(response.data.data);
  };

  const handleCreateComment = async () => {
    // console.log();
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <Header bgColor="white" />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: 5,
            height: "auto",
            padding: "2em",
            width: "40em",
          }}
        >
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <UserAvatar />
            </Grid>
            <Grid item>
              <img
                src={ThreeDotVerticalIcon}
                width={20}
                alt="Three Dot Vertical Icon"
              />
            </Grid>
          </Grid>

          <Stack
            sx={{
              marginX: "4.5em",
              // marginX: "2em",
              marginY: "1em",
              textAlign: "justify",
              alignSelf: "center",
              gap: "1em",
            }}
          >
            <Typography variant="body1" color={"#0e185f"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              itaque reprehenderit eaque inventore odit, neque cupiditate soluta
              qui totam similique consequuntur beatae repellat sed, enim rem
              magni repellendus amet. Tempore!
            </Typography>

            <Grid
              container
              sx={{
                backgroundColor: "white",
                width: "fit-content",
                borderRadius: 5,
                padding: "0.25em 1em",
                marginTop: "1em",
                display: "flex",
                alignItems: "center",
                gap: "1em",
                position: "relative",
                zIndex: 0,
              }}
            >
              <Grid item sx={{ maxWidth: 200, overflow: "hidden" }}>
                <Typography variant="body1" color="#0e185f">
                  meet.google.com/TBA
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  position: "relative",
                  zIndex: 1,
                  left: 15,
                }}
              >
                <Button
                  href={`${postDetail.url}`}
                  sx={{
                    width: "fit-content",
                    borderRadius: 3,
                    backgroundColor: "#0e185f",
                    alignItems: "center",
                    padding: "0.25em 1.75em",
                    textTransform: "none",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#0e185f",
                    },
                  }}
                >
                  <Typography variant="body1" fontWeight={600} color="white">
                    Join
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Stack>
          {/* <Grid
            sx={{
              marginX: "4.5em",
              marginY: "1em",
              textAlign: "justify",
              alignSelf: "center",
            }}
          >
            <Typography variant="body1" color={"#0e185f"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              itaque reprehenderit eaque inventore odit, neque cupiditate soluta
              qui totam similique consequuntur beatae repellat sed, enim rem
              magni repellendus amet. Tempore!
            </Typography>
            <Grid
              sx={{
                backgroundColor: "white",
                width: "fit-content",
                borderRadius: 5,
                padding: "0.25em 1em",
                marginTop: "1em",
                display: "flex",
                alignItems: "center",
                gap: "1em",
                position: "relative",
                zIndex: 0,
              }}
            >
              <Grid sx={{ maxWidth: 200, overflow: "hidden" }}>
                <Typography variant="body1" color="#0e185f">
                  meet.google.com/TBA
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

          <Grid
            container
            sx={{
              gap: "0.5em",
              marginBottom: "1em",
            }}
          >
            <Grid item>
              <img src={ThumbUpIcon} width={30} alt="Thumbs Up Icon" />
            </Grid>
            <Grid item>
              <img src={ThumbDownIcon} width={30} alt="Thumbs Down Icon" />
            </Grid>
            <Grid item>
              <img src={BubbleChatIcon} width={30} alt="Bubble Chat Icon" />
            </Grid>
          </Grid>

          <hr />

          <Box>
            <TextField
              variant="standard"
              disableUnderline
              fullWidth
              multiline
              placeholder="Tulis komentar..."
              sx={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: "0.25em 1em",
                marginBottom: "1em",
              }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment>
                    <Button onClick={() => console.log("COMMENT SENT")}>
                      <img
                        src={SendIcon}
                        width={28}
                        height={28}
                        style={{ marginLeft: "0.5em" }}
                        alt="Send Icon"
                      />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {postRepliesList && postRepliesList.length > 0 ? (
            postRepliesList.map((replies) => {
              return (
                <CommentBox
                  key={postRepliesList.id_post_comment}
                  dataComment={replies}
                />
              );
            })
          ) : (
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
              <img src={BubbleChatIcon} width={30} height={30} alt="Comment" />
              <Typography variant="body1" color="#0e185f">
                Belum ada komentar
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PostDetailPage;
