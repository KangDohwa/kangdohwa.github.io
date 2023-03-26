/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Type_1, Type_2 } from "./Type";

const StyledLevel = styled.div`

  position: absolute;
  width: 500px;

  ${(props) =>
    (props.i == 0) &&
    css`${Type_1}`
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
  return <StyledLevel {...props}>
    <div id = {props.name}>
      <p className = {props.name}>{props.t}</p>
    </div>
  </StyledLevel>
}