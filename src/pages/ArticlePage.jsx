import React from "react";
import ArticleCard from "../components/card/ArticleCard";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ArticlePage = () => {
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
            <a href="http://google.com">
              <Box
                component="div"
                sx={{
                  backgroundColor: "#0e185f",
                  borderRadius: 2,
                  padding: "0.25em 1em 0.25em 1em",
                  marginLeft: "0.25em",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={"white"}
                  fontWeight={600}
                >
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
            Tips & Artikel biar kamu makin produktif!
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            marginX: "12em",
            marginBottom: "1.5em",
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#0e185f">
            All Articles
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
          <ArticleCard />
          <ArticleCard />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ArticlePage;
