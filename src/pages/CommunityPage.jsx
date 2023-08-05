import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Grid } from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import BelajarBareng from "../containers/CommunityContainer/BelajarBareng";
import TipsArticle from "../containers/CommunityContainer/TipsArticle";
import BaseMenuBar from "../components/menubar/BaseMenuBar";

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

const CommunityPage = () => {
  const [pageComponent, setPageComponent] = useState("USER_POSTS");

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
          <BaseMenuBar
            menuItems={menuItems}
            currentPageComponent={pageComponent}
            onPageComponentChange={setPageComponent} // ngirim setstate ke BaseMenuBar agar BaseMenuBar bisa  ngeset pageComponent
            addDialog
          />
        </Grid>
        {pageComponent === "USER_POSTS" && <BelajarBareng />}
        {pageComponent === "TIPS_ARTICLES" && <TipsArticle />}
        <Footer />
      </Box>
    </>
  );
};

export default CommunityPage;
