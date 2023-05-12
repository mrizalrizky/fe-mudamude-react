import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btnLogin: {
    backgroundColor: "#0e185f",
    borderRadius: "30px",
    color: "white",
  },
});

const LoginButton = () => {
  const styles = useStyles();

  return (
    <>
      <a href="/login" className={`btn mx-5 px-5 ${styles.btnLogin}`}>
        Login
      </a>
      {/* <a href="/profile" className={`btn mx-5 px-5 ${styles.btnLogin}`}>
        Profile
      </a> */}
    </>
  );
};

export default LoginButton;
