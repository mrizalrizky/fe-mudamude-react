import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UserAvatar from "../../components/UserAvatar";
import { BaseInput } from "../../components/inputs/BaseInput";

export const UserProfile = ({ data }) => {
  return (
    <Box
      component="div"
      sx={{
        width: 650,
        height: "auto",
        padding: "2.5em",
        borderRadius: 5,
        backgroundColor: "#f4f4f4",
      }}
    >
      <UserAvatar
        fullName={data.fullName ?? "-"}
        institution={data.institution ?? "-"}
      />
      <Box component="div" sx={{ marginY: "1em" }}>
        <Typography variant="h5" color="#0e185f" fontWeight={600}>
          Personal Information
        </Typography>
      </Box>
      <Grid container sx={{ rowGap: "1em", justifyContent: "space-between" }}>
        <Grid item>
          <BaseInput
            label="Full Name"
            name="full_name"
            type="text"
            placeholder={data.fullName ?? ""}
          />
        </Grid>
        <Grid item>
          <BaseInput
            label="Username"
            name="username"
            type="text"
            placeholder={data.username ?? ""}
          />
        </Grid>
        <Grid item>
          <BaseInput
            label="Email"
            name="email"
            type="email"
            placeholder={data.email ?? ""}
          />
        </Grid>
        <Grid item>
          <BaseInput
            label="Phone"
            name="phone"
            type="text"
            placeholder={data.phone ?? ""}
          />
        </Grid>
        <Grid item>
          <BaseInput
            label="Institution"
            name="institution"
            type="text"
            placeholder={data.institution ?? ""}
          />
        </Grid>
        <Grid item>
          <BaseInput
            label="Major"
            name="major"
            type="text"
            placeholder={data.major ?? ""}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
