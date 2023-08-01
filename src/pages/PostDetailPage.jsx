import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography, Input, Button, Grid, Stack } from "@mui/material";
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

  const getUserComments = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/posts/comments?id_post=1`
    );
    setPostRepliesList(response.data.data);
  };

  const handleCreateComment = async () => {
    console.log();
  };

  useEffect(() => {
    getPostDetails();
    getUserComments();
  }, []);

  return (
    <>
      <Header bgColor="white" />
      <Container sx={{display: 'flex',justifyContent: 'center',backgroundColor: 'yellow'}}>
        <Box sx={{
          backgroundColor: '#f4f4f4',
            borderRadius: 5,
            height: 'auto',
            padding: '2em',
            width: '40em',
          }}>

        <Grid container sx={{justifyContent: 'space-between'}}>
          <Grid item><UserAvatar /></Grid>
          <Grid item>
            <img src={ThreeDotVerticalIcon} width={20} alt="More"/>
          </Grid>
        </Grid>

        <Grid container sx={{ gap:'0.5em', marginBottom: '1em',backgroundColor: 'magenta'}}>
          <Grid item><img src={ThumbUpIcon} width={30} alt="Thumbs up"/></Grid>
          <Grid item><img src={ThumbDownIcon} width={30} alt="Thumbs down"/></Grid>
          <Grid item><img src={BubbleChatIcon} width={30} alt="Bubble chat"/></Grid>
        </Grid>

        <hr/>

        <Box
          component="div"
          sx={{
            backgroundColor: "white",
            borderRadius: 5,
            height: "auto",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "1.5em",
            paddingRight: "0.5em",
            paddingLeft: "1em",
          }}
        >
          <Input
            disableUnderline
            fullWidth
            multiline
            placeholder="Tulis komentar..."
            endAdornment={

          <Button onClick={handleCreateComment}>
            <img src={SendIcon} width={25} height={25} alt="Send Comment" />
          </Button>
            }
          />
        </Box>
        {postRepliesList.length > 0 ? (
          postRepliesList.map((replies) => {
            return (
              <Box component="div" key={postRepliesList.id_post_comment}>
                <CommentBox data={replies} />
              </Box>
            );
          })
        ) : (
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
