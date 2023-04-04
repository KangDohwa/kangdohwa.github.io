import React from "react";

import InputForm from "./function/InputForm";
import Header from "./Header";

import "./Calendar.scss";

function Calendar() {

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