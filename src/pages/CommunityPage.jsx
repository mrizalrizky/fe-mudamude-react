import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserPostCard from "../components/card/UserPostCard";
import axios from "axios";
import { Box, Button, Dialog, Input, Typography } from "@mui/material";
import PlusCircleOutlineIcon from "../assets/icons/ic_plus_circle_outline.svg";
import PostDialog from "../components/dialog/PostDialog";
import UserAvatar from "../components/UserAvatar";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);

  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

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
            <Button onClick={handleDialogOpen} sx={{ margin: 0, padding: 0 }}>
              <Box component="div" padding={0}>
                <img
                  src={PlusCircleOutlineIcon}
                  width={25}
                  height={25}
                  alt="Add Event"
                />
              </Box>
            </Button>
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
                    <Button onClick={handleDialogClose}>
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
                    <Button>
                      <Typography variant="caption" color="white">
                        Send
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Dialog>
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
