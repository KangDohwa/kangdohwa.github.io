import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";

import { MdHome } from "react-icons/md";

function Nav(props) {
  const [open, setOpen] = React.useState([false, false]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = (i) => {
    const o = { ...open };
    o[i] = !o[i];
    setOpen(o);
  };

  const handleListItemClick = (event, i) => {
    setSelectedIndex(i);
  };

  return (
    <>
      <div className = "Nav">
        <ul 
        onSelect = {selectedIndex === "Home"} 
        onClick = {(event) => { 
          handleListItemClick(event, "Home");
          handleClick(0);
        }}>
          <Link to = "/home">
            <li className = "Nav-Home">
              <MdHome /> Home 
            </li>
          </Link>
          <Collapse isOpened = {true || false}>
            <Link to = "/clock">
              <li className = "Nav-Clock">
                <MdHome /> <span>Clock</span>
              </li>
            </Link>
          </Collapse>
        </ul>
      </div>
    </>
  )
}

export default Nav;