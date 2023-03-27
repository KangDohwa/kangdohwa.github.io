import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdHome } from "react-icons/md";

import Clock from "../component/Clock";

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
          <Clock />
          {/* <li className = "Nav-Cat1">
            <MdHome /> 일반
          </li> */}
          <Link to = "/home">
            <li className = "Nav-Home">
              <MdHome /> 메인 
            </li>
          </Link>
          {/* <Link to = "/clock">
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
          </Link> */}
          <Link to = "/sheetgenerator">
            <li className = "Nav-SheetGenerator">
              <MdHome /> <span>트친소 시트</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Nav;