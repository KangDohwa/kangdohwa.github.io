import React from "react";
import { Route, Routes } from "react-router-dom";

import Info from "../package.json";

import Header from "./pages/Header";
import Nav from "./pages/Nav";

import Home from "./pages/Home";
import Clock from "./component/Clock";
import Minesweeper from "./component/Minesweeper/Minesweeper";
import TicTacToe from "./component/TicTacToe/Board";
import SheetGenerator from "./component/SheetGenerator/Core";

function App(props) {
  return (
    <div className = "App">
      <div className = "App-Header">
        <Header version = {Info.version}/>
      </div>
      <div className = "App-Body">
        <div className = "App-Nav">
          <Nav />
        </div>
        <div className = "App-Section">
          <Routes>
            <Route path = "/home" element = {<Home />} />
            <Route path = "/clock" element = {<Clock />} />
            <Route path = "/mine" element = {<Minesweeper />} />
            <Route path = "/tictactoe" element = {<TicTacToe />} />
            <Route path = "/sheetgenerator" element = {<SheetGenerator />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
