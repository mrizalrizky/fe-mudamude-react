import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmitButton from "../button/SubmitButton";
import { Box } from "@mui/material";

export default function BenefitCard(props) {
  return (
    <Card
      variant="none"
      sx={{
        width: 345,
        height: 300,
        borderRadius: 5,
        backgroundColor: "#f4f4f4",
        marginLeft: "20px",
        display: "inline-block",
      }}
    >
      <Typography
        variant="h5"
        fontSize="18px"
        display="flex"
        justifyContent="center"
        fontWeight={600}
        color="#0e185f"
        marginTop="22px"
      >
        {props.title}
      </Typography>
      <CardMedia
        component="img"
        image={props.image}
        sx={{
          width: "auto",
          height: 150,
          margin: "0 auto",
          marginTop: "1em",
          display: "block",
        }}
      />
      <Box
        sx={{
          marginTop: "1.25em",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <SubmitButton
          title={props.buttonText}
          bgColor="#0e185f"
          height="45px"
        />
      </Box>
    </Card>
  );
}
