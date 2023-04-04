import React from "react";
import { Link } from "react-router-dom";

import Clock from "@Clock/Clock";

import "./Nav.scss";

function Nav(props) {

  return (
    <>
      <div className = "Nav">
        <Link to = "/">
          메인
        </Link>
        <Link to = "/FFXIV_Sheet">
          파판 시트
        </Link>
        <Link to = "/Calendar">
          일정
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