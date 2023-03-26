import React, { useState } from "react";
import styled, { css } from "styled-components";

import New from "./images/status/Newbie.png";
import RNew from "./images/status/Return.png";
import MPVE from "./images/status/MPVE.png";
import MPRP from "./images/status/MPRP.png";
import MPVP from "./images/status/MPVP.png";

import { Type_1, Type_2 } from "./Type";

export default function Status({ children, ...props }) {

  // const [UserStatus] = useState({
  //   New: false,
  //   RNew: false,
  //   MPVE: false,
  //   MPRP: false,
  //   MPVP: false,
  // })

  const UserStatus = {
    New, RNew, MPVE, MPRP, MPVP,
  };

  const StyledLevel = styled.div`

  color: gray;
  left: 100px;
  top: 200px;
  z-index: 150;

  ${(props) =>
    (props.c == true) &&
    css`
    color: none;
  `};

  ${(props) =>
    (props.i == 0) &&
    css`${Type_1}`
  };

  `;

  const Status = UserStatus[props.stat];
  return <div>
    <StyledLevel {...props}>
      <div id = {props.stat}>{children}
        <Status className = {props.stat} />
      </div>
    </StyledLevel>
  </div>;
}
