import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SubmitButton from "../button/SubmitButton";

export default function BenefitCard(props) {
  return (
    <Card
      variant="none"
      sx={{
        width: 345,
        height: 250,
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
        fontWeight={700}
        color="#0e185f"
        marginTop="22px"
      >
        {props.title}
      </Typography>
      <CardMedia
        component="img"
        image={props.image}
        sx={{ width: "200px", margin: "0 auto", display: "block" }}
      />
      <CardContent
        sx={{
          marginTop: "8px",
          marginLeft: "10px",
          justifyContent: "center",
          display: "flex",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <SubmitButton
          title={props.buttonText}
          bgColor="#0e185f"
          height="45px"
        />
      </CardContent>
    </Card>
  );
}
