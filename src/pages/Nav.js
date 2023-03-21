import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <ul>
          <li className = "Nav-Cat1">
            <MdHome /> 일반
          </li>
          <Link to = "/home">
            <li className = "Nav-Home">
              <MdHome /> Home 
            </li>
          </Link>
          <Link to = "/clock">
            <li className = "Nav-Clock">
              <MdHome /> <span>Clock</span>
            </li>
          </Link>
          <Link to = "/mine">
            <li className = "Nav-Mine">
              <MdHome /> <span>Minesweeper</span>
            </li>
          </Link>
          <Link to = "/tictactoe">
            <li className = "Nav-TicTacToe">
              <MdHome /> <span>TicTacToe</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Nav;