import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArticleCard from "../../components/card/ArticleCard";
import axios from "axios";

export default function TipsArticle() {
  const [articleList, setArticleList] = useState([]);

  const getArticleList = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/articles/all`
    );
    setArticleList(res.data.data);
  };

  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <>
      <Box
        sx={{
          padding: "2em",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600} color="#0e185f">
          Tips & Artikel biar kamu makin produktif!
        </Typography>
      </Box>
      <Container>
        <Typography variant="h5" fontWeight={600} color="#0e185f">
          All Articles
        </Typography>
        <Grid
          container
          sx={{ justifyContent: "space-between", marginTop: "1em" }}
        >
          {articleList && articleList.length > 0 ? (
            articleList.map((article) => {
              return (
                <Grid item>
                  <ArticleCard data={article} />
                </Grid>
              );
            })
          ) : (
            <p>Empty</p>
          )}
        </Grid>
      </Container>
    </>
  );
}
