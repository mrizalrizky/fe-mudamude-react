import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserPostCard from "../../components/card/UserPostCard";
import axios from "axios";

export default function BelajarBareng() {
  const [postList, setPostList] = useState([]);
  const getPostList = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/all`);

    setPostList(res.data.data);
  };

  useEffect(() => {
    getPostList();
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
          #BelajarBareng
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            marginTop: "1em",
          }}
        >
          {postList && postList.length > 0 ? (
            postList.map((post) => {
              return (
                <Grid item sx={{ marginBottom: "3em" }}>
                  <UserPostCard key={post.id_post} data={post} />
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
