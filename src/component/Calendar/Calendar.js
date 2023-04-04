import React from "react";

import InputForm from "./function/InputForm";
import Header from "./Header";

import GetfromDB from "./function/GetfromDB";

import "./Calendar.scss";

function Calendar() {
  GetfromDB();

  return (
    <>
    <div className = "Container">
      <Header />
      <div className = "Calendar">
        <div id = "Display">
          <div id = "Current">

          </div>
          <div id = "Future">

          </div>
        </div>
        <InputForm />
      </div>
    </div>
    </>
  );
}

export default Calendar;