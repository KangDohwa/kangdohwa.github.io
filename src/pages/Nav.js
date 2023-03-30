import React from "react";
import { Link } from "react-router-dom";

import Clock from "../component/Clock/Clock";

import "./Nav.scss";

function Nav(props) {

  return (
    <>
      <div className = "Nav">
        <Link to = "/Home">
          메인
        </Link>
        <Link to = "/FFXIV_Sheet">
          트친소 시트
        </Link>
        <div className = "Spacer" />
        <div className = "Version">
          V{props.version}
        </div>
        <Clock />
      </div>
    </>
  )
}

export default Nav;