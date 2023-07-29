import { Container, Typography } from "@mui/material";
import React from "react";

export default function Breadcrumb({ pageTitle, pageDescription }) {
  return (
    <Container sx={{ padding: "2em 0" }}>
      <Typography
        variant="h4"
        sx={{ display: "inline" }}
        fontWeight={600}
        color="#0e185f"
      >
        {pageTitle}
      </Typography>
      <Typography variant="h6" color="#0e185f">
        {pageDescription}
      </Typography>
    </Container>
  );
}
