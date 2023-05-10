import React from "react";
import logo from "../assets/logo.svg";
import NavButton from "./button/NavButton";
import LoginButton from "./button/LoginButton";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <img width={125} height={128} src={logo} alt="MudaMude" />
      </a>
      <ul className="navbar-nav d-flex justify-content-center flex-grow-1">
        <NavButton name="Home" href="#" />
        <NavButton name="Event" href="#" />
        <NavButton name="Community" href="#" />
        <NavButton name="Partnership" href="#" />
        <NavButton name="About" href="#" />
      </ul>
      <LoginButton />
    </nav>
  );
};

export default Header;
