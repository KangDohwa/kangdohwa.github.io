/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from "react";
import styled, { css } from "styled-components";

import { Type_1, Type_2 } from "@SheetGenerator/def/Type";

const StyledLevel = styled.div`

  // position: absolute;

  // font-family: "Gamja Flower";
  // font-family: "KorailRoundGothicBold";
  // font-family: "LINESeedKRBold";

  ${(props) =>
    (props.i == 1) &&
    css`
    
    ${Type_1}`
    
  };
  
  ${(props) =>
    (props.i == 2) &&
    css`
    
    ${Type_2}`
    
  };

  `;

function detect(props) {
  const prefix = "<<";
  const suffix = ">>";

  if (props.name == "FCs") { // << >> Line
    if (props.t == "") { // if Blank
      return (
      <div id = {props.name}>
      <p className = {props.name}>{props.t}</p>
      </div>
      )
    } else { // if Has text
      return (
      <div id = {props.name}>
        <p>{prefix}{props.t}{suffix}</p>
      </div>
      )
    }
  } else if (props.name == "Style") { // if Style
    return (
      <div id = {props.name}>
        <p>성향 : {props.t}</p>
      </div>
    )
  } else if (props.name == "Like") { // if Like
    return (
      <div id = {props.name}>
        <p>좋아요 : {props.t}</p>
      </div>
    )
  } else if (props.name == "Dislike") { // if Dislike
    return (
      <div id = {props.name}>
        <p>싫어요 : {props.t}</p>
      </div>
    )
  } else if (props.name == "Desc") { // if Desc
    return (
      <div id = {props.name}>
        <p>한마디 : {props.t}</p>
      </div>
    )
  } else { // rest of
    return (
      <div id = {props.name}>
        <p>{props.t}</p>
      </div>
    )
  }
};

export default function Texts(props) {
  return (
  <StyledLevel {...props}>
    {detect(props)}
  </StyledLevel>
  )
};
    // {props.name == "FCs" ? (props.t == "" ? (
    //   <div id = {props.name}>
    //     <p className = {props.name}>{props.t}</p>
    //   </div>) : (
    //   <div id = {props.name}>
    //     <p className = {props.name}>{prefix}{props.t}{suffix}</p>
    //   </div>)) : (props.name == "Style" ? (
    //     <div id = {props.name}>
    //       <p className = {props.name}>성향 : {props.t}</p>
    //     </div>) : (props.name == "Like" ? (
    //       <div id = {props.name}>
    //         <p className = {props.name}>좋아요 : {props.t}</p>
    //       </div>) : (props.name == "Dislike" ? (
    //       <div id = {props.name}>
    //         <p className = {props.name}>싫어요 : {props.t}</p>
    //       </div>) : (props.name == "Desc" ? (
    //       <div id = {props.name}>
    //         <p className = {props.name}>한마디 : {props.t}</p>
    //       </div>) : (
    // <div id = {props.name}>
    //   <p className = {props.name}>{props.t}</p>
    // </div>)))))}