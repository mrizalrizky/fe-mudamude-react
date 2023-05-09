import react from "react";
import logo from "..//assets/logo.svg";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Mudamude Logo" />
          </a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link header-nav" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header-nav" aria-current="page" href="#">
                  Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header-nav" aria-current="page" href="#">
                  Community
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header-nav" aria-current="page" href="#">
                  Partnership
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header-nav" aria-current="page" href="#">
                  About
                </a>
              </li>
            </ul>
            <button class="btn btn-login-circle" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
