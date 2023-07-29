import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import MembershipBenefitCard from "../../components/card/MembershipBenefitCard";
import MembershipIcon from "../../assets/icons/ic_membership.svg";

export const UserMembership = () => {
  return (
    <Stack gap="3em">
      <Box
        component="div"
        sx={{
          height: "auto",
          marginRight: "5em",
          padding: "2em 2.5em",
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
        }}
      >
        <Typography variant="h5" color="#0e185f" fontWeight={600}>
          Membership Status
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            padding: "0.5em 2em 0.5em 1em",
            marginTop: "1em",
            gap: "1em",
            borderRadius: 2,
            backgroundColor: "white",
            width: "fit-content",
          }}
        >
          <Grid item>
            <img src={MembershipIcon} alt="Member Icon" />
          </Grid>
          <Grid item>
            <Stack>
              <Typography color="#0e185f" fontWeight={700} fontSize="20px">
                Express
              </Typography>
              <Typography color="#0e185f" fontWeight={400} fontSize="16px">
                Berakhir pada selamanya
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="div"
        sx={{
          height: "auto",
          marginRight: "5em",
          padding: "2em 2.5em",
          backgroundColor: "#f4f4f4",
          borderRadius: 5,
        }}
      >
        <Typography variant="h5" color="#0e185f" fontWeight={600}>
          Mau Upgrade?
        </Typography>
        <Grid container sx={{ gap: "2em", marginTop: "1em" }}>
          <Grid item>
            <MembershipBenefitCard name="Lite" price="10000" bgColor="white" />
          </Grid>
          <Grid item>
            <MembershipBenefitCard name="Lite" price="10000" bgColor="white" />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
