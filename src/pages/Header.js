import React from "react";

import Clock from "@Clock/Clock";

import Logo from "@src/images/dohwa.png";

import "./Header.scss";

function Header(props) {
  return (
    <div className = "Header">
      <div className = "Header-Logo">
        <img width = "80" height = "80" src = {Logo} alt = "Logo" />
      </div>
      <div className = "Header-Version">
        <span>v{props.version}</span>
      </div>
      <div className = "Header-Spacer" />
      <div className = "Header-Clock">
        <Clock />
      </div>
      <div className = "Header-User">
        User Avatar
      </div>
    </div>
  )
}

export default Header;