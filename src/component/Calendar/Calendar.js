import React from "react";

// import { addData } from "./function/DocumentAdd";
// import DocGet from "./function/DocumentGet";

import InputForm from "./function/InputForm";
import AddtoDB from "./function/AddtoDB";
import GetfromDB from "./function/GetfromDB";

import "./Calendar.scss";

function Calendar() {

  return (
    <div className = "Calendar">
      <div id = "Display" className = "Display">

      </div>
      <InputForm />
      <button onClick = {GetfromDB}>가져오기</button>
    </div>
  );
}

export default Calendar;