import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Banner from "../assets/images/partnership_banner.png";
import EventCard from "../components/card/EventCard";
import MembershipBenefitCard from "../components/card/MembershipBenefitCard";
import axios from "axios";
import banner1 from "../assets/images/banner1.svg";
import banner2 from "../assets/images/banner2.svg";

const PartnershipPage = () => {
  const [membershipList, setMembershiplist] = useState([]);

  useEffect(() => {
    const getMembershipList = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/roles/all`);
      setMembershiplist(res.data.data);
    };
    getMembershipList();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Stack gap="2rem">
          <Grid
            container
            sx={{
              height: "250px",
              padding: "2em",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 5,
              backgroundColor: "#0e185f",
            }}
          >
            <Grid>
              <Typography fontSize="24px" fontWeight={600} color="#ffffff">
                Yuk kolaborasi bareng MudaMude!
              </Typography>
              <Typography fontSize="16px" fontWeight={400} color="#ffffff">
                mudamude@company.com
              </Typography>
            </Grid>
            {/* <Grid sx={{ backgroundColor: "red" }}>
              <img src={banner1} alt="banner 1" />
            </Grid> */}
          </Grid>

          <Grid>
            <Typography
              sx={{ marginBottom: "2em" }}
              variant="h5"
              fontWeight={600}
              color="#0e185f"
            >
              Kolaborasi yang Sedang Berlangsung
            </Typography>
            <Grid container gap="5em" sx={{ justifyContent: "center" }}>
              <EventCard />
              <EventCard />
              <EventCard />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ justifyContent: "space-between", backgroundColor: "#2FA4FF" }}
          >
            <Grid sx={{ backgroundColor: "magenta" }}>
              <Typography>Punya pertanyaan?</Typography>
            </Grid>
            <Grid>
              <img src={banner2} />
            </Grid>
          </Grid>

          <Grid sx={{ textAlign: "center" }}>
            <Typography
              sx={{ marginBottom: "2em" }}
              variant="h5"
              fontWeight={600}
              color="#0e185f"
            >
              Waktunya Jadi Member!
            </Typography>
            <Grid
              container
              gap="2em"
              sx={{
                justifyContent: "center",
              }}
            >
              {membershipList.map((data) => {
                return (
                  <MembershipBenefitCard
                    key={data.id_role}
                    name={data.name}
                    price={data.price}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default PartnershipPage;
