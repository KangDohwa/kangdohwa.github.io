import axios from "axios";

export default async function GetHtml( addr ) {
  if (isNaN(addr)) {
    const _addr = `${process.env.REACT_APP_SELF_PROXY_ADDRESS}${addr}`;
    try {
      return await axios.get(_addr);
    } catch (e) {
      alert("올바른 주소를 입력해주세요!");
      // console.error("Error on NaN :", e);
    }
  } else {
    const _addr = `${process.env.REACT_APP_SELF_PROXY_ADDRESS}https://ffxiv.eorzeacollection.com/glamour/${addr}`;
    try {
      return await axios.get(_addr);
    } catch (e) {
      alert("올바른 숫자를 입력해주세요!");
      // console.error("Error on Num :", e);
    }
  }
}