import React from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";

export const BaseInput = ({
  label,
  width,
  name,
  type,
  placeholder,
  icon,
  iconAlt,
  onChange,
}) => {
  return (
    <>
      {label && (
        <InputLabel htmlFor={label}>
          <Typography variant="body1" color="#0e185f" fontWeight={500}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <TextField
        variant="standard"
        fullWidth
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: width ? width : "auto",
          padding: "0.25em 0.5em",
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: icon && (
            <img
              src={icon}
              width={16}
              height={16}
              style={{ marginLeft: "0.5em" }}
              alt={iconAlt}
            />
          ),
        }}
      />
      {/* </Box> */}
    </>
  );
};
