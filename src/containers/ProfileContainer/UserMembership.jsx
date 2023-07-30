import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import MembershipBenefitCard from "../../components/card/MembershipBenefitCard";
import MembershipIcon from "../../assets/icons/ic_membership.svg";
import axios from "axios";

export const UserMembership = ({ data }) => {
  const [roleList, setRoleList] = useState([]);

  const getRolesList = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/roles/exclude?username=${data?.username}`
    );

    console.log("RESP", response);

    if (response && response.data.data) {
      setRoleList(response.data.data);
    }
  };
  useEffect(() => {
    getRolesList();
  }, []);
  return (
    <Stack gap="3em">
      {console.log(data)}
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
                {/* {console.log(data)} */}
                {/* {data.master_role.name ?? "-"} */}
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
          {roleList && roleList.length > 0 ? (
            roleList.map((role) => {
              return (
                <Grid item>
                  <MembershipBenefitCard
                    name={role.name}
                    price={role.price}
                    bgColor="white"
                  />
                </Grid>
              );
            })
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </Stack>
  );
};
