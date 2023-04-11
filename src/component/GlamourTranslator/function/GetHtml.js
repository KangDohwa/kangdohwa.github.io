import axios from "axios";

export default async function GetHtml( addr ) {
  if (isNaN(addr)) {
    try {
      return await axios.get(addr);
    } catch (e) {
      console.error("Error on NaN :", e);
    }
  } else {
    const _addr = "eorzeacollection/glamour/" + addr;
    try {
      return await axios.get(_addr);
    } catch (e) {
      console.error("Error on Num :", e);
    }
  }
}