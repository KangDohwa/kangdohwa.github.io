import Type1 from "../images/bg/Bg_Type1.png";
import Type2 from "../images/bg/Bg_Type2.png";

export default function Background(props) {
  const BG = {
    1: Type1,
    2: Type2,
  }
  console.log(BG[props.index]);

  return (
    <img className = "ImgBG" src = {BG[props.index]} alt = {props.index} />
  )
}