import React, { useState } from "react";
import { Box, Button, Dialog, Typography } from "@mui/material";
import UserAvatar from "../UserAvatar";
import { BaseInput } from "../inputs/BaseInput";
import axios from "axios";
import { decodeToken } from "../../utils/jwtDecode";

export default function PostDialog({ openDialog, closeDialog }) {
  const user = decodeToken(localStorage.getItem("token"));
  const [postData, setPostData] = useState({});

  const handleSubmit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/posts`,
      { ...postData, id_user: user?.id }
    );
    if (response && response.data.data) {
      closeDialog();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Dialog
      open={openDialog}
      onClose={closeDialog}
      PaperProps={{
        sx: {
          borderRadius: 5,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f4f4f4",
          padding: "2em",
          borderRadius: 5,
          width: 500,
          height: 400,
        }}
      >
        <Box component="div" sx={{ paddingBottom: "1em" }}>
          <UserAvatar
            fullName={user?.username ?? "-"}
            institution={user?.institution ?? "-"}
          />
        </Box>
        <Box
          sx={{
            paddingBottom: "1em",
          }}
        >
          <BaseInput
            type="text"
            label="Mau sharing apa?"
            placeholder="Tulis disini..."
            name="content"
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
          />
        </Box>
        <Box component="div" sx={{ paddingBottom: "0.5em" }}>
          <Typography variant="subtitle1" color="#0e185f" fontWeight={500}>
            Link #BelajarBareng
          </Typography>
          <BaseInput
            type="text"
            name="url"
            placeholder="Link meeting"
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            height: 30,
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.25em",
              borderRadius: 5,
              backgroundColor: "white",
            }}
          >
            <Button onClick={closeDialog}>
              <Typography variant="caption" color="#ec2424">
                Discard
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "#0e185f",
            }}
          >
            <Button onClick={handleSubmit}>
              <Typography variant="caption" color="white">
                Send
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
