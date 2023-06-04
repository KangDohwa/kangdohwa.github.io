import React, { useState } from "react";

import "./Clock.scss";

export default function Clock() {
  const [timer, setTimer] = useState("00:00");

  function currentTimer() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`)
  }

  function startTimer() {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <div className = "Clock">
      <span>{timer}</span>
    </div>
  );
}