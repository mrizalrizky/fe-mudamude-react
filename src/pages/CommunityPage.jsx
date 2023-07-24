import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserPostCard from "../components/card/UserPostCard";
import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import PlusCircleOutlineIcon from "../assets/icons/ic_plus_circle_outline.svg";
import ArticleCard from "../components/card/ArticleCard";
import UserAvatar from "../components/UserAvatar";
import BaseTabButton from "../components/button/BaseTabButton";
import { styled } from "@mui/system";
import Breadcrumb from "../components/Breadcrumb";

const BaseButton = styled(Button)({
  borderRadius: 8.5,
  padding: "0.25em 1em 0.25em 1em",
  marginLeft: "0.25em",
  textTransform: "none",
  color: "white",
  backgroundColor: "#0e185f",
});

const CommunityPage = () => {
  const [postList, setPostList] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [pageComponent, setPageComponent] = useState("USER_POSTS");

  const [open, setOpen] = useState(false);

  const handleSubmitPost = async () => {
    const postData = {
      id_user: 1,
      content: postContent,
      url: postUrl,
    };
    await axios.post(`${process.env.REACT_APP_API_URL}/posts`, postData);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const getArticleList = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/articles/all`
    );
    setArticleList(res.data.data);
  };
  const getPostList = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/all`);

    const newPostListFetch = res.data.data;
    if (JSON.stringify(postList) !== JSON.stringify(newPostListFetch)) {
      console.log("DIFFERENT");
      console.log(postList);
      console.log(newPostListFetch);
    } else console.log("SAME");

    setPostList(res.data.data);
  };

  useEffect(() => {
    switch (pageComponent) {
      case "USER_POSTS":
        getPostList();
        break;

      case "TIPS_ARTICLES":
        getArticleList();
        break;

      default:
        break;
    }
  }, [pageComponent]);

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
          title="Community"
          description="Yuk kolaborasi bareng teman-teman lain di sini!"
        />
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-0.5em",
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
            <BaseTabButton
              title="Belajar Bareng"
              variant="contained"
              isActive={pageComponent === "USER_POSTS"}
              onClick={() => {
                setPageComponent("USER_POSTS");
              }}
            />
            <BaseTabButton
              title="Tips & Artikel"
              variant="contained"
              isActive={pageComponent === "TIPS_ARTICLES"}
              onClick={() => {
                setPageComponent("TIPS_ARTICLES");
              }}
            />
            <Button onClick={handleDialogOpen} sx={{ margin: 0, padding: 0 }}>
              <Box component="div" padding={0}>
                <img
                  src={PlusCircleOutlineIcon}
                  width={25}
                  height={25}
                  alt="Add Post"
                />
              </Box>
            </Button>
            <FormControl>
              <Dialog open={open}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#f4f4f4",
                    padding: "1em 2.5em",
                    borderRadius: 5,
                    width: 500,
                    height: 400,
                  }}
                >
                  <Box component="div" sx={{ paddingBottom: "1em" }}>
                    <UserAvatar
                      fullName="Evelyn" // di get dari current user login
                      institution="Institut Teknologi Bandung"
                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      paddingBottom: "1em",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="#0e185f"
                      fontWeight={500}
                    >
                      Mau sharing apa?
                    </Typography>
                    <Box component="div" sx={{ height: 100 }}>
                      <Input
                        onChange={(e) => {
                          setPostContent(e.target.value);
                        }}
                        disableUnderline
                        fullWidth
                        multiline
                        sx={{
                          backgroundColor: "white",
                          height: "100%",
                          borderRadius: 3,
                          padding: "1em",
                        }}
                        placeholder="Tulis di sini..."
                      />
                    </Box>
                  </Box>
                  <Box component="div" sx={{ paddingBottom: "0.5em" }}>
                    <Typography
                      variant="subtitle1"
                      color="#0e185f"
                      fontWeight={500}
                    >
                      Link #BelajarBareng
                    </Typography>
                    <Input
                      onChange={(e) => {
                        setPostUrl(e.target.value);
                      }}
                      disableUnderline
                      sx={{
                        width: 250,
                        borderRadius: 20,
                        backgroundColor: "white",
                        paddingX: "1em",
                        paddingY: "0.5em",
                      }}
                      placeholder="Link meeting"
                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      height: 30,
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "0.5em",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.25em",
                        borderRadius: 5,
                        backgroundColor: "white",
                      }}
                    >
                      <Button
                        onClick={handleDialogClose}
                        sx={{ textTransform: "none" }}
                      >
                        <Typography variant="caption" color="#ec2424">
                          Discard
                        </Typography>
                      </Button>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        backgroundColor: "#0e185f",
                      }}
                    >
                      <Button
                        onClick={handleSubmitPost}
                        sx={{ textTransform: "none" }}
                      >
                        <Typography variant="caption" color="white">
                          Send
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Dialog>
            </FormControl>
          </Box>
        </Box>
        {pageComponent === "USER_POSTS" && (
          <>
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
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor: "red",
                  width: "81vw",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "3.65em",
                }}
              >
                {postList.length > 0 ? (
                  postList.map((post) => {
                    return <UserPostCard data={post} />;
                  })
                ) : (
                  <p>Empty</p>
                )}
              </Box>
            </Box>
          </>
        )}
        {pageComponent === "TIPS_ARTICLES" && (
          <>
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
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor: "red",
                  width: "81vw",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "5.3em",
                }}
              >
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </Box>
            </Box>
          </>
        )}
        <Footer />
      </Box>
    </>
  );
};

export default CommunityPage;
