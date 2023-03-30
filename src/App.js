import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteChangeTracker from "./RouteChangeTracker";

import Info from "../package.json";

// import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import SheetGenerator from "./component/SheetGenerator/Core";
import Fonts from "./component/Fonts/Fonts";

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
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/FFXIV_Sheet" element = {<SheetGenerator />} />
            <Route path = "/Fonts" element = {<Fonts />} />
          </Routes>
      </div>
      <div className = "Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
