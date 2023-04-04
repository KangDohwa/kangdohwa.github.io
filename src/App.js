import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteChangeTracker from "@src/RouteChangeTracker";

import Info from "../package.json";

// import Header from "./pages/Header";
import Nav from "@Pages/Nav";
import Footer from "@Pages/Footer";

import Home from "@Pages/Home";
import Sheet from "@SheetGenerator/Sheet";
import Calendar from "@Calendar/Calendar";
import Fonts from "@Fonts/Fonts";

function App(props) {
  return (
    <div className = "App">
      <div className = "Header">
        {/* <Header version = {Info.version}/> */}
        <Nav version = {Info.version} />
      </div>
      <div className = "Container">
        <RouteChangeTracker />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/FFXIV_Sheet" element = {<Sheet />} />
            <Route path = "/Fonts" element = {<Fonts />} />

            <Route path = "/Calendar" element = {<Calendar />} />
            <Route path = "/how/Calendar" element = {<Calendar />} />
          </Routes>
      </div>
      <div className = "Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
