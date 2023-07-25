import React from "react";
import { styled } from "@mui/system";
import CheckCircleIcon from "../../assets/icons/ic_circle_check.svg";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const StyledListItem = styled(ListItem)({
  padding: 0,
});

const CheckIcon = styled("img")({
  marginRight: "0.5em",
  width: "25px",
  height: "25px",
});

export default function MembershipBenefitCard({ name, price }) {
  return (
    <Box
      component="div"
      sx={{
        width: "275px",
        height: "auto",
        backgroundColor: "#f4f4f4",
        borderRadius: 5,
        paddingY: "2em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" fontWeight={700} color="#0e185f">
          {name}
        </Typography>
        <Typography vairant="subtitle1" fontWeight={600} color="#0e185f">
          Rp {price.toLocaleString("id-ID")}/bulan
        </Typography>
      </Box>
      <List
        sx={{
          marginX: "1.5em",
        }}
      >
        <StyledListItem>
          <CheckIcon src={CheckCircleIcon} />
          <ListItemText primary="Bebas ikut" />
        </StyledListItem>
        <StyledListItem>
          <CheckIcon src={CheckCircleIcon} />
          <ListItemText primary="Unlimited upload event untuk selamanya" />
        </StyledListItem>
      </List>
      <Button
        sx={{
          backgroundColor: "#0e185f",
          color: "white",
          borderRadius: 10,
          paddingX: "3em",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#0e185f",
            color: "white",
          },
        }}
      >
        Beli
      </Button>
    </Box>
  );
}
