import axios from "axios";

export default async function GetVersion( name ) {
  try {
    const _addr = "wiki/" + name;
    return await axios.get(_addr);
  } catch (e) {
    console.error("Error on Wiki :", e);
  }
}