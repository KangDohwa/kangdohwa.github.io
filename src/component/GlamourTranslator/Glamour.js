import React from "react";
import * as cheerio from "cheerio";

import { useSelector, useDispatch } from "react-redux";

import { setAddress } from "@src/app/slice/Address";
import { up } from "@src/app/slice/Address";

import GetHtml from "./function/GetHtml";
import GlamourList from "./function/GlamourList";
import TranslateItems from "./function/TranslateItems";
import TranslateDyes from "./function/TranslateDyes";

import ArrayGlamour, { GetValue } from "./function/ArrayGlamour";
import { setGlamour } from "../../app/slice/Glamour";

// #mw-content-text > div > table.itembox.shadowed > tbody > tr:nth-child(1) > td:nth-child(2) > div:nth-child(3) > sup > a

function Glamour() {
  var _array = [];

  const dispatch = useDispatch();
  const address = useSelector((state) => {
    return state.address.address;
  });
  async function updateAddress() {
    _array = await ArrayGlamour();
    console.log(_array);
    dispatch(setAddress(GetValue()));
  };
  const value = useSelector((state) => {
    return state.address.value;
  });
  function addNumber() {
    dispatch(up(2));
  };
  const glamour = useSelector((state) => {
    return state.glamour.array;
  })
  async function updateGlamour() {
    _array = await ArrayGlamour();
    dispatch(setGlamour(_array));
  }

  return (
    <>
    <div className = "Glamour">
      <input id = "Glamour-Address" type = "text" placeholder = "number" required />
      <button onClick = {updateGlamour}>Search</button>
      <button onClick = {updateAddress}>Refresh</button>
      <button onClick = {addNumber}>+2</button>
    </div>
    <div id = "gaddr">{address}</div>
    <div id = "gvalu">{value}</div>
    <GlamourList glamourList = {glamour} />
    </>
  )
}

export default Glamour;