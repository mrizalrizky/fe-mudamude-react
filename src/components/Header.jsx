import React from "react";
import AppLogo from "../assets/logo.svg";
import NavButton from "./button/NavButton";
import LoginButton from "./button/LoginButton";
import { Grid, Typography } from "@mui/material";
import ProfileIcon from "../assets/icons/ic_profile_circle.svg";
import { Link } from "react-router-dom";

const Header = ({ bgColor }) => {
  const backgroundColor = bgColor ? bgColor : "white";
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: backgroundColor }}
    >
      <a className="navbar-brand" href="/">
        <img width={125} height={128} src={AppLogo} alt="MudaMude" />
      </a>
      <ul className="navbar-nav d-flex justify-content-center flex-grow-1">
        <NavButton name="Home" href="/" />
        <NavButton name="Event" href="/event" />
        <NavButton name="Community" href="/community" />
        <NavButton name="Partnership" href="/partnership" />
        <NavButton name="About" href="/about" />
      </ul>

      {localStorage.getItem("token") ? (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Grid
            container
            sx={{ marginRight: "3em", gap: "1em", alignItems: "center" }}
          >
            <Grid item>
              <Typography color="#0e185f" fontWeight={400} fontSize="16px">
                Hello, {localStorage.getItem("username")}
              </Typography>
            </Grid>
            <Grid item>
              <img src={ProfileIcon} alt="Profile Icon" width={35} />
            </Grid>
          </Grid>
        </Link>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};

export default Header;
