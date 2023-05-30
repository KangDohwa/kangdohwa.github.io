import React from "react";

import { useSelector, useDispatch } from "react-redux";

import GlamourList from "./function/GlamourList";

import ArrayGlamour from "./function/ArrayGlamour";
import { setGlamour } from "@src/app/slice/Glamour";

import ArrayVersion from "./function/ArrayVersion";

import "./Glamour.scss";

function Glamour() {
  const dispatch = useDispatch();
  const glamour = useSelector((state) => {
    return state.glamour.array;
  })
  async function updateGlamour() {
    var _array = await ArrayGlamour();
    dispatch(setGlamour(_array));
  }

  return (
    <>
    <div className = "Glamour">
      <input id = "Glamour-Address" type = "text" placeholder = "번호를 입력해주세요" required />
      <button onClick = {updateGlamour}>불러오기</button>
      {/* <button onClick = {ArrayVersion}>Version</button> */}
      <div className = "Spacer" />
    </div>
      <GlamourList glamourList = {glamour} />
    </>
  )
}

export default Glamour;