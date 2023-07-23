import { Container, Typography } from "@mui/material";
import React from "react";

export default function Breadcrumb({ title, description }) {
  return (
    <Container sx={{ padding: "2em 0" }}>
      <Typography
        variant="h4"
        sx={{ display: "inline" }}
        fontWeight={600}
        color="#0e185f"
      >
        {title}
      </Typography>
      <Typography variant="h6" color="#0e185f">
        {description}
      </Typography>
    </Container>
  );
}
