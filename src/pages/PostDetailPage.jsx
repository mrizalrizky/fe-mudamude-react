import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, Box, Container, Typography, Input } from "@mui/material";
import moreIcon from "../assets/icons/ic_dot_three_vertical.svg";
import ThumbUpIcon from "../assets/icons/ic_thumb_up.svg";
import ThumbDownIcon from "../assets/icons/ic_thumb_down.svg";
import CommentIcon from "../assets/icons/ic_comments.svg";
import SendIcon from "../assets/icons/ic_send.svg";
import CommentBox from "../components/CommentBox";

const PostDetailPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getUserComments = async () => {
      const response = await axios.get(
        "http://localhost:3344/api/posts/comments?id_post=1"
      );
      console.log(response.data.data);
      setComments(response.data.data);
    };
    getUserComments();
  }, []);

  return (
    <>
      <Header />
      <Container
        sx={{
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
          height: "auto",
          width: "40em",
          marginBottom: "2em",
          paddingBottom: "2em",
          display: "flex",
          flexDirection: "column",
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
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2em",
            }}
          >
            <Avatar sx={{ width: 60, height: 60 }} />
            <Box component="div" sx={{ marginLeft: "1em " }}>
              <Typography variant="h6" fontWeight={600} color={"#0e185f"}>
                Susi
              </Typography>
              <Typography variant="subtitle1" color={"#0e185f"}>
                Universitas Bina Nusantara
              </Typography>
            </Box>
          </Box>
          <div>
            <img src={moreIcon} alt="" width={20} />
          </div>
        </Box>
        <Box component="div" sx={{ paddingLeft: "4.7em" }}>
          <Typography variant="body1" color={"#0e185f"}>
            Belajar IPA bareng yuk! Ini linknya
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
              meet.google.com
            </Typography>
            <Box
              component="div"
              sx={{
                width: "auto",
                borderRadius: 3,
                backgroundColor: "#0e185f",
                display: "flex",
                alignItems: "center",
                padding: "0.25em 1.75em",
                marginTop: "0.1em",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="body1" fontWeight={600} color="white">
                Join
              </Typography>
            </Box>
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
            height: "2.5em",
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
            placeholder="Tulis komentar..."
            sx={{ paddingRight: "0.5em" }}
          />
          <img src={SendIcon} width={25} height={25} alt="Send Comment" />
        </Box>
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
          {comments.length > 0 ? (
            comments.map((comment) => {
              return <CommentBox data={comment} />;
            })
          ) : (
            <Typography variant="body1" color="#0e185f">
              Belum ada komentar
            </Typography>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PostDetailPage;
