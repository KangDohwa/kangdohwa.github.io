import React from "react";
import { Route, Routes } from "react-router-dom";

import Info from "../package.json";

import Header from "./pages/Header";
import Nav from "./pages/Nav";

import Home from "./pages/Home";
import Clock from "./component/Clock";

function App(props) {
  return (
    <div className = "App">
      <header className = "App-Header">
        <Header version = {Info.version}/>
      </header>
      <body className = "App-Body">
        <div className = "App-Nav">
          <Nav />
        </div>
        <div className = "App-Section">
          <Routes>
            <Route path = "/home" element = {<Home />} />
            <Route path = "/clock" element = {<Clock />} />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
