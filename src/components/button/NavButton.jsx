import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerNavItem: {
    color: "#0e185f",
    fontSize: "18px",
    fontWeight: "700",
  },
});
const NavButton = (props) => {
  const styles = useStyles();

  return (
    <li className="nav-item px-2">
      <a
        className={`nav-link ${styles.headerNavItem}`}
        aria-current="page"
        href={props.href}
      >
        {props.name}
      </a>
    </li>
  );
};

export default NavButton;
