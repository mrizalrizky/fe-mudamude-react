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
        <Stack gap="3rem">
          <Grid
            container
            sx={{
              height: "auto",
              padding: "3em",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 5,
              backgroundColor: "#0e185f",
            }}
          >
            <Grid item>
              <Typography fontSize="32px" fontWeight={600} color="#ffffff">
                Yuk kolaborasi bareng MudaMude!
              </Typography>
              <Typography fontSize="20px" fontWeight={400} color="#ffffff">
                mudamude@company.com
              </Typography>
            </Grid>
            <Grid item>
              <img height={250} src={banner1} alt="Banner 1" />
            </Grid>
          </Grid>

          <Stack gap="2em">
            <Typography fontSize="28px" fontWeight={600} color="#0e185f">
              Kolaborasi yang Sedang Berlangsung
            </Typography>
            <Grid container gap="5em" sx={{ justifyContent: "center" }}>
              <EventCard />
              <EventCard />
              <EventCard />
            </Grid>
          </Stack>

          <Grid
            container
            sx={{
              height: "auto",
              padding: "3em",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 5,
              backgroundColor: "#2FA4FF",
            }}
          >
            <Grid item sx={{ flexBasis: "50%", textAlign: "center" }}>
              <Stack>
                <Box
                  sx={{
                    width: "fit-content",
                    borderRadius: 2,
                    alignSelf: "center",
                    paddingX: "2em",
                    backgroundColor: "#0e185f",
                  }}
                >
                  <Typography fontSize="32px" fontWeight={600} color="#ffffff">
                    GRATIS!
                  </Typography>
                </Box>
                <Typography fontSize="32px" fontWeight={600} color="#ffffff">
                  Upload event kamu di MudaMude dengan jangkauan ratusan anak
                  muda hingga mahasiswa Indonesia!
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <img height={250} src={banner2} alt="Banner 2" />
            </Grid>
          </Grid>

          <Stack gap="2em" sx={{ textAlign: "center" }}>
            <Typography fontSize="28px" fontWeight={600} color="#0e185f">
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
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default PartnershipPage;
