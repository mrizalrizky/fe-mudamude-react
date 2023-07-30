import React, { Fragment, useState } from "react";
import { Box, Button, Dialog, Input, Typography } from "@mui/material";
import UserAvatar from "../UserAvatar";
import PlusCircleOutlineIcon from "../../assets/icons/ic_plus_circle_outline.svg";

export default function PostDialog() {
  const [open, setOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <Box
        component="div"
        sx={{
          backgroundColor: "#f4f4f4",
          padding: "1em 2.5em",
          borderRadius: 5,
          width: 500,
          height: 400,
        }}
      >
        <Box component="div" sx={{ paddingBottom: "1em" }}>
          <UserAvatar
            fullName="Evelyn" // di get dari current user login
            institution="Institut Teknologi Bandung"
          />
        </Box>
        <Box
          component="div"
          sx={{
            paddingBottom: "1em",
          }}
        >
          <Typography variant="subtitle1" color="#0e185f" fontWeight={500}>
            Mau sharing apa?
          </Typography>
          <Box component="div" sx={{ height: 100 }}></Box>
        </Box>
        <Box component="div" sx={{ paddingBottom: "0.5em" }}>
          <Typography variant="subtitle1" color="#0e185f" fontWeight={500}>
            Link #BelajarBareng
          </Typography>
          <Input
            disableUnderline
            sx={{
              width: 250,
              borderRadius: 20,
              backgroundColor: "white",
              paddingX: "1em",
              paddingY: "0.5em",
            }}
            placeholder="Link meeting"
          />
        </Box>
        <Box
          component="div"
          sx={{
            height: 30,
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5em",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.25em",
              borderRadius: 5,
              backgroundColor: "white",
            }}
          >
            <Button onClick={handleDialogClose}>
              <Typography variant="caption" color="#ec2424">
                Discard
              </Typography>
            </Button>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "#0e185f",
            }}
          >
            <Button>
              <Typography variant="caption" color="white">
                Send
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
  {
    /* <FormControl>
<Dialog open={open}>
  <Box
    component="div"
    sx={{
      backgroundColor: "#f4f4f4",
      padding: "1em 2.5em",
      borderRadius: 5,
      width: 500,
      height: 400,
    }}
  >
    <Box component="div" sx={{ paddingBottom: "1em" }}>
      <UserAvatar
        fullName="Evelyn"
        institution="Institut Teknologi Bandung"
      />
    </Box>
    <Box
      component="div"
      sx={{
        paddingBottom: "1em",
      }}
    >
      <Typography
        variant="subtitle1"
        color="#0e185f"
        fontWeight={500}
      >
        Mau sharing apa?
      </Typography>
      <Box component="div" sx={{ height: 100 }}>
        <Input
          name="content"
          onChange={handleInputChange}
          disableUnderline
          fullWidth
          multiline
          sx={{
            backgroundColor: "white",
            height: "100%",
            borderRadius: 3,
            padding: "1em",
          }}
          placeholder="Tulis di sini..."
        />
      </Box>
    </Box>
    <Box component="div" sx={{ paddingBottom: "0.5em" }}>
      <Typography
        variant="subtitle1"
        color="#0e185f"
        fontWeight={500}
      >
        Link #BelajarBareng
      </Typography>
      <Input
        name="url"
        onChange={handleInputChange}
        disableUnderline
        sx={{
          width: 250,
          borderRadius: 20,
          backgroundColor: "white",
          paddingX: "1em",
          paddingY: "0.5em",
        }}
        placeholder="Link meeting"
      />
    </Box>
    <Box
      component="div"
      sx={{
        height: 30,
        display: "flex",
        justifyContent: "flex-end",
        gap: "0.5em",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.25em",
          borderRadius: 5,
          backgroundColor: "white",
        }}
      >
        <Button
          onClick={handleDialogClose}
          sx={{ textTransform: "none" }}
        >
          <Typography variant="caption" color="#ec2424">
            Discard
          </Typography>
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          backgroundColor: "#0e185f",
        }}
      >
        <Button
          onClick={handleSubmitPost}
          sx={{ textTransform: "none" }}
        >
          <Typography variant="caption" color="white">
            Send
          </Typography>
        </Button>
      </Box>
    </Box>
  </Box>
</Dialog>
</FormControl> 
  );*/
  }
}
