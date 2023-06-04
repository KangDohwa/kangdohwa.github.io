import React from "react"

import "./InputText.scss";

export default function InputText(props) {
  return (
    <>
    <div className = "TextLine">
    <p>{props.PH} : </p>
    <input 
      className = {props.name}
      type = "text"
      name = {props.name}
      placeholder = {props.PH}
      value = {props.t}
      onChange = {props.fc}
    />
    </div>
    </>
  )
};