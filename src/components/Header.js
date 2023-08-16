import React from "react";
import { createTheme } from "@mui/material";
import "./Header.css";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: { main: "#800080" },
      type: "dark",
      text: {
        primary: "#800080",
      },
    },
  });

  return (
    <div>
      <nav className="nav">
        <div className="logo-container">
          <a href="/" className="logolink">
            <img src="logo.png" alt="Company Logo" className="logo" />
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">About</a>
          </li>
          <li className="nav-item">
            <a href="">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/Contact">Contact</a>
          </li>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick="closeMenu()"
          ></i>
        </ul>
        <i className="fa fa-bars" aria-hidden="true" onClick="openMenu()"></i>
      </nav>
    </div>
  );
};

export default Header;
