import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteChangeTracker from "./RouteChangeTracker";

import Info from "../package.json";

import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import Clock from "./component/Clock";
import Minesweeper from "./component/Minesweeper/Minesweeper";
import TicTacToe from "./component/TicTacToe/Board";
import SheetGenerator from "./component/SheetGenerator/Core";
import Fonts from "./pages/Fonts";

function App(props) {
  return (
    <div className = "App">
      {/* <div className = "App-Header">
        <Header version = {Info.version}/>
      </div> */}
      <div className = "App-Body">
        <div className = "App-Nav">
          <Nav />
        </div>
        <div className = "App-Section">
          {/* <BrowserRouter> */}
          <RouteChangeTracker />
            <Routes>
              <Route path = "/home" element = {<Home />} />
              <Route path = "/clock" element = {<Clock />} />
              <Route path = "/mine" element = {<Minesweeper />} />
              <Route path = "/tictactoe" element = {<TicTacToe />} />
              <Route path = "/sheetgenerator" element = {<SheetGenerator />} />
              <Route path = "/fonts" element = {<Fonts />} />
            </Routes>
          {/* </BrowserRouter> */}
        </div>
      </div>
      <div className = "App-Footer">
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
