import React, { useState } from "react";

export default function Timer(props) {
  var timer = 0;
  const setTimer = useState("0");

  const currentTimer = () => {
    timer += 1;
    setTimer({timer})
  }
  
  function startTimer() {
    setInterval(currentTimer, 1000);
  }

  function stopTimer() {
    
  }

  startTimer()

  return (
    <span className = "Timer">
      {timer}
    </span>
  )
}