import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  FormControl,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import PlusCircleOutlineIcon from "../assets/icons/ic_plus_circle_outline.svg";
import UserAvatar from "../components/UserAvatar";
import BaseTabButton from "../components/button/BaseTabButton";
import Breadcrumb from "../components/Breadcrumb";
import BelajarBareng from "../containers/CommunityContainer/BelajarBareng";
import TipsArticle from "../containers/CommunityContainer/TipsArticle";
import BaseMenuBar from "../components/menubar/BaseMenuBar";

const CommunityPage = () => {
  // const [postContent, setPostContent] = useState("");
  // const [postUrl, setPostUrl] = useState("");
  const menuItems = [
    {
      label: "Belajar Bareng",
      key: "USER_POSTS",
    },
    {
      label: "Tips dan Artikel",
      key: "TIPS_ARTICLES",
    },
  ];
  const [pageComponent, setPageComponent] = useState("USER_POSTS");
  const [open, setDialogOpen] = useState(false);
  const [postData, setPostData] = useState({
    id_user: null,
    content: null,
    url: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const username = localStorage.getItem("username");

  const handleSubmitPost = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/posts`,
      { ...postData, id_user: 1 }
    );

    if (response && response.data.data) {
      setDialogOpen(false);
    }
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
        <Header bgColor="#f4f4f4" />
        <Breadcrumb
          pageTitle="Community"
          pageDescription="Yuk kolaborasi bareng teman-teman lain di sini!"
        />
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <BaseMenuBar menuItems={menuItems} addBtn />
        </Grid>
        {pageComponent === "USER_POSTS" && <BelajarBareng />}
        {pageComponent === "TIPS_ARTICLES" && <TipsArticle />}
        <Footer />
      </Box>
    </>
  );
};

export default CommunityPage;
