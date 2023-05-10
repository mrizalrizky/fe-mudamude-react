import React from "react";
import { Container, Typography } from "@mui/material";

const Gerak = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        marginTop="135px"
        marginBottom="20px"
        fontWeight={600}
        color="#0e185f"
      >
        Gerak bareng MudaMude
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        textAlign="justify"
        marginBottom={15}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nam
        dignissimos eos incidunt quia consectetur adipisci voluptatibus facilis
        eligendi totam quibusdam, earum aut minima sequi tempora, blanditiis
        similique doloremque debitis?Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Aut commodi quae, dicta rerum inventore, quo omnis
        molestias labore fugiat expedita nobis. Ut velit a ducimus illo
        accusamus rem, recusandae dolor?Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Laudantium, sequi totam enim inventore nobis excepturi
        atque minima, exercitationem aut reprehenderit vitae neque error quod
        quos nihil dolore. Voluptatum, amet aut!
      </Typography>

      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center" }}
        fontWeight={600}
        color="#0e185f"
      >
        Benefit yang kamu dapetin kalau ikut gabung!
      </Typography>
    </Container>
  );
};

export default Gerak;
