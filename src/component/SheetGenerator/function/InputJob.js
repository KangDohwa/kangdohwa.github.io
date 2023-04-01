import { JobName } from "@SheetGenerator/def/Jobs";
import { JobIconPNG } from "@SheetGenerator/def/Icons_png";

import "./InputJob.scss";

export default function InputJob(props) { // function make input field
  return (
    <>
      <div className = {props.type}>{JobName[props.name]}
      <img src = {JobIconPNG[props.name]} alt = "" />
      <input 
        className = {props.job}
        type = "number"
        name = {props.job}
        value = {props.value}
        onChange = {props.fc}
        min = "0"
        max = "90"
      />
      </div>
    </>
  )
};