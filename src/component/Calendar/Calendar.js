import React from "react";

// import { addData } from "./function/DocumentAdd";
// import DocGet from "./function/DocumentGet";

import InputForm from "./function/InputForm";

import "./Calendar.scss";

function Calendar() {

  return (
    <div className = "Calendar">
      <div id = "Display">
        <div className = "Current">
          <div className = "Times">
            <div className = "DayS">
              <p>BeginDay</p>
              <p>~</p>
              <p>EndDay</p>
            </div>
          </div>
          <div className = "Server">
            <p>Server</p>
          </div>
          <div className = "Location">
            <p>Town Res1 Res2</p>
          </div>
          <div className = "Username">
            <p>Username</p>
          </div>
          <div className = "Description">
            <p>Description</p>
          </div>
          <div className = "Link">
            <a href = "Link">바로가기</a>
          </div>
        </div>
      </div>
      <InputForm />
    </div>
  );
}

export default Calendar;