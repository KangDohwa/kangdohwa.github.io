/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Type_1, Type_2 } from "../def/Type";

const StyledLevel = styled.div`

  position: absolute;
  width: 500px;

  // font-family: "Gamja Flower";
  // font-family: "KorailRoundGothicBold";
  font-family: "LINESeedKR-Bd";

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

export default function Texts(props) {

  // const [TextField] = useState({
  //   textName: "textName",
  // })

  // const {
  //   textName
  // } = TextField;

  // const T = {
  //   textName,
  // };

  const prefix = "<<";
  const suffix = ">>";
  return <StyledLevel {...props}>
    {props.name == "FCs" ? (props.t == "" ? (
      <div id = {props.name}>
        <p className = {props.name}>{props.t}</p>
      </div>) : (
      <div id = {props.name}>
        <p className = {props.name}>{prefix}{props.t}{suffix}</p>
      </div>)) : (props.name == "Style" ? (
        <div id = {props.name}>
          <p className = {props.name}>성향 : {props.t}</p>
        </div>) : (props.name == "Like" ? (
          <div id = {props.name}>
            <p className = {props.name}>좋아요 : {props.t}</p>
          </div>) : (props.name == "Dislike" ? (
          <div id = {props.name}>
            <p className = {props.name}>싫어요 : {props.t}</p>
          </div>) : (props.name == "Desc" ? (
          <div id = {props.name}>
            <p className = {props.name}>한마디 : {props.t}</p>
          </div>) : (
    <div id = {props.name}>
      <p className = {props.name}>{props.t}</p>
    </div>)))))
  }
  </StyledLevel>
}