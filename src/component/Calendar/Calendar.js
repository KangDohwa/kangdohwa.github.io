import React, { useState } from "react";

import { addData } from "./function/DocumentAdd";
import DocGet from "./function/DocumentGet";

import "./Calendar.scss";

// async function refresh(ms) {
//   const sec = ms / 1000;
//   let i = 0;
//   await setInterval(() => {
//     i += 1;
//     console.log(`${sec} sec - ${i}`);
//   }, ms);
// }

// refresh(5000);

function Calendar() {

  return (
    <div className = "Calendar">
      <div className = "Display">

      </div>
      <form className = "Input">
        <div className = "DayStart">
          <p>시작하는 시간</p>
          <input id = "DayStart" type = "datetime-local" />
        </div>
        <div className = "DayEnd">
          <p>끝나는 시간</p>
          <input id = "DayEnd" type = "datetime-local"/>
        </div>
        <input type = "text" name = "place1" />
      </form>
      <div className = "Button">
        <DocGet />
        <button onClick = {addData}>추가</button>
      </div>
    </div>
  );
}

export default Calendar;