import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography, Input, Button } from "@mui/material";
import UserAvatar from "../components/UserAvatar";
import moreIcon from "../assets/icons/ic_dot_three_vertical.svg";
import ThumbUpIcon from "../assets/icons/ic_thumb_up.svg";
import ThumbDownIcon from "../assets/icons/ic_thumb_down.svg";
import CommentIcon from "../assets/icons/ic_comments.svg";
import SendIcon from "../assets/icons/ic_send.svg";
import CommentBox from "../components/CommentBox";
import { useParams } from "react-router";

const PostDetailPage = () => {
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [postRepliesList, setPostRepliesList] = useState([]);

  const getPostDetails = async () => {
    const response = await axios.get(
      `http://localhost:3344/api/posts/${slug}/detail`
    );
    setPostDetail(response.data.data);
  };

  const getUserComments = async () => {
    const response = await axios.get(
      "http://localhost:3344/api/posts/comments?id_post=1"
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
      <Container
        sx={{
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
          height: "auto",
          width: "40em",
          marginBottom: "2em",
          paddingBottom: "0.5em",
          display: "flex",
          flexDirection: "column",
          marginTop: "3em",
        }}
      >
        <Box
          component="div"
          sx={{
            margin: "0 0.25em 1em 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <UserAvatar
            fullName={postDetail.fullName}
            institution={postDetail.institution}
          />
          <div>
            <img src={moreIcon} alt="" width={20} />
          </div>
        </Box>
        <Box component="div" sx={{ paddingLeft: "4.7em" }}>
          <Typography variant="body1" color={"#0e185f"}>
            {postDetail.content}
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1em",
              borderRadius: 20,
              backgroundColor: "white",
              width: "65%",
              height: "2em",
              paddingLeft: "1em",
              marginBottom: "2.5em",
            }}
          >
            <Typography
              variant="subtitle1"
              color="#0e185f"
              sx={{
                display: "flex",
                flex: 1,
              }}
            >
              {postDetail.url}
            </Typography>
            <Button
              href={`http://${postDetail.url}`}
              sx={{
                width: "auto",
                borderRadius: 3,
                backgroundColor: "#0e185f",
                display: "flex",
                alignItems: "center",
                padding: "0.25em 1.75em",
                marginTop: "0.1em",
                justifyContent: "flex-end",
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
          </Box>
        </Box>
        <Box component="div" sx={{ display: "flex", gap: "1em" }}>
          <img src={ThumbUpIcon} width={30} height={30} alt="Thumb Up" />
          <img src={ThumbDownIcon} width={30} height={30} alt="Thumb Down" />
          <img src={CommentIcon} width={30} height={30} alt="Comment" />
        </Box>
        <hr />
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
            sx={{ paddingRight: "0.5em" }}
          />
          <Button onClick={handleCreateComment}>
            <img src={SendIcon} width={25} height={25} alt="Send Comment" />
          </Button>
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
            <img src={CommentIcon} width={30} height={30} alt="Comment" />
            <Typography variant="body1" color="#0e185f">
              Belum ada komentar
            </Typography>
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default PostDetailPage;
