import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserPostCard from "../components/card/UserPostCard";
import axios from "axios";
import { Box, Button, Dialog, Input, Typography } from "@mui/material";
import PlusCircleOutlineIcon from "../assets/icons/ic_plus_circle_outline.svg";
import PostDialog from "../components/dialog/PostDialog";
import UserAvatar from "../components/UserAvatar";
import CommunityTabButton from "../components/button/CommunityTabButton";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);

  // const [open, setOpen] = useState(false);

  // const handleDialogOpen = () => {
  //   setOpen(true);
  // };

  // const handleDialogClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    const getPostList = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/all`);
      setPosts(res.data.data);
    };
    getPostList();
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          height: "20em",
          backgroundColor: "#f4f4f4",
          borderRadius: "0 0 30px 30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box component="div" sx={{ padding: "2em 3em" }}>
          <Typography
            variant="h4"
            sx={{ display: "inline" }}
            fontWeight={600}
            color="#0e185f"
          >
            Community
          </Typography>
          <Typography variant="h6">
            Yuk kolaborasi bareng teman-teman lain di sini!
          </Typography>
        </Box>
        <CommunityTabButton/>
        <Box
          component="div"
          sx={{
            padding: "2em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            #BelajarBareng
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            width: "auto",
            paddingX: "5em",
            marginBottom: "2em",
            gap: "5em",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {posts.length > 0 ? (
            posts.map((post) => {
              return <UserPostCard data={post} />;
            })
          ) : (
            <p>Empty</p>
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default CommunityPage;
