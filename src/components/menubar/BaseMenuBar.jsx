import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

import PlusCircleOutlineIcon from "../../assets/icons/ic_plus_circle_outline.svg";
import BaseTabButton from "../button/BaseTabButton";

export default function BaseMenuBar({ menuItems, addBtn }) {
  const [pageComponent, setPageComponent] = useState(menuItems[0].key);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Grid
      container
      sx={{
        borderRadius: 5,
        padding: "1.25em 1.75em",
        backgroundColor: "#0e185f",
        width: "fit-content",
      }}
    >
      {menuItems.map((menu) => {
        return (
          <BaseTabButton
            key={menu.label}
            title={menu.label}
            isActive={pageComponent === menu.key}
            onClick={() => setPageComponent(menu.key)}
          />
        );
      })}

      {addBtn && (
        <Button onClick={handleOpenDialog} sx={{ margin: 0, padding: 0 }}>
          <img
            src={PlusCircleOutlineIcon}
            width={25}
            height={25}
            alt="Add Post"
          />
        </Button>
      )}
    </Grid>
  );
}
