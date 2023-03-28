/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Type_1, Type_2 } from "../def/Type";

const StyledLevel = styled.div`
  
  position: absolute;

  ${(props) =>
    (props.c == false) &&
    css`
    .New {
      filter: grayscale(100%);
    }
    .RNew {
      filter: grayscale(100%);
    }
    .MPVE {
      filter: grayscale(100%);
    }
    .MPRP {
      filter: grayscale(100%);
    }
    .MPVP {
      filter: grayscale(100%);
    }
  `};

  ${(props) =>
    (props.i == 1) &&
    css`${Type_1}`
  };

  ${(props) =>
    (props.i == 2) &&
    css`${Type_2}`
  };

`;

export default function Status(props) {

  // const [UserStatus] = useState({
  //   New: "New",
  //   RNew: "RNew",
  //   MPVE: "MPVE",
  //   MPRP: "MPRP",
  //   MPVP: "MPVP",
  // })

  // const {
  //   New, RNew, MPVE, MPRP, MPVP
  // } = UserStatus;

  // const S = {
  //   New, RNew, MPVE, MPRP, MPVP,
  // };

  // const UserStatus = {
  //   New, RNew, MPVE, MPRP, MPVP,
  // };

  // const Status = S[props.stat];
  return <StyledLevel {...props}>
    <div id = {props.stat}>
      <img className = {props.stat} src = {props.src} alt = {props.stat}/>
    </div>
  </StyledLevel>
}
