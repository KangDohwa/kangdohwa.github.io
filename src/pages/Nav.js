import React from "react";
import { HashRouter, Link, withRouter } from "react-router-dom";

import Clock from "../component/Clock/Clock";

import "./Nav.scss";

function Nav(props, { location }) {
  // const [open, setOpen] = React.useState([false, false]);
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleClick = (i) => {
  //   const o = { ...open };
  //   o[i] = !o[i];
  //   setOpen(o);
  // };

  // const handleListItemClick = (event, i) => {
  //   setSelectedIndex(i);
  // };

  return (
    <>
      <div className = "Nav">
        <Link to = "/">
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