import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, Box, Container, Typography } from "@mui/material";
import moreIcon from "../assets/icons/ic_dot_three_vertical.svg";

const PostDetailPage = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
          height: "30em",
          width: "40em",
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", marginTop: "2em" }}
        >
          <Box
            component="div"
            sx={{
              marginBottom: "1em",
              margin: "0 2em 1.5em 0", // // BOTTOM //
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
            <Typography variant="h6" color={"#0e185f"}>
              Belajar IPA bareng yuk! Ini linknya
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PostDetailPage;
