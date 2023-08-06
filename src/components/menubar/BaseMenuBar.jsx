import { Button, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import PostDialog from "../dialog/PostDialog";
import PlusCircleOutlineIcon from "../../assets/icons/ic_plus_circle_outline.svg";
import BaseTabButton from "../button/BaseTabButton";

export default function BaseMenuBar({
  menuItems,
  addDialog,
  currentPageComponent,
  onPageComponentChange,
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const isLoggedIn = localStorage.getItem("token");

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
        padding: "1.25em",
        backgroundColor: "#0e185f",
        width: "fit-content",
      }}
    >
      {menuItems.map((menu) => {
        return (
          <BaseTabButton
            key={menu.label}
            title={menu.label}
            isActive={currentPageComponent === menu.key}
            onClick={() => onPageComponentChange(menu.key)}
          />
        );
      })}

      {isLoggedIn && currentPageComponent === "USER_POSTS" && addDialog && (
        <IconButton onClick={handleOpenDialog} sx={{ margin: 0, padding: 0 }}>
          <img
            src={PlusCircleOutlineIcon}
            width={25}
            height={25}
            alt="Add Post"
          />
        </IconButton>
      )}
      <PostDialog openDialog={openDialog} closeDialog={handleCloseDialog} />
    </Grid>
  );
}
