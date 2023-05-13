import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserPostCard from "../components/card/UserPostCard";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import PlusCircleOutlineIcon from "../assets/icons/ic_plus_circle_outline.svg";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostList = async () => {
      const res = await axios.get("http://localhost:3344/api/posts/all");
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
            variant="h3"
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
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "magenta",
              borderRadius: 5,
              padding: "1.25em 1.75em",
              display: "flex",
              marginRight: "2px",
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
            <Box component="div" marginLeft={1}>
              <img
                src={PlusCircleOutlineIcon}
                width={25}
                height={25}
                alt="Add Event"
              />
            </Box>
          </Box>
        </Box>
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
