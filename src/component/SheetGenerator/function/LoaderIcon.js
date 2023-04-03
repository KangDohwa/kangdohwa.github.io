/* eslint-disable eqeqeq */
import React from "react";
import styled, { css } from "styled-components";

import { JobIconSVG } from "@SheetGenerator/def/Icons_svg";
// import { JobIconPNG } from "@SheetGenerator/def/Icons_png";

import { Type_1, Type_2 } from "@SheetGenerator/def/Type";

// export const JobList = [
//   // Tank
//   GLA: GLA, PLD: PLD, MRD: MRD, WAR: WAR, DRK: DRK, GNB: GNB,

//   // Healer
//   CNJ: CNJ, WHM: WHM, SCH: SCH, AST: AST, SGE: SGE,

//   // DPS Melee
//   PGL: PGL, MNK: MNK, LNC: LNC, DRG: DRG, ROG: ROG, NIN: NIN, SAM: SAM, RPR: RPR,

//   // DPS Ranged Physical
//   ARC: ARC, BRD: BRD, MCH: MCH, DNC: DNC,

//   // DPS Ranged Magical
//   THM: THM, BLM: BLM, ACN: ACN, SMN: SMN, RDM: RDM, BLU: BLU,

//   // Disciples of the Hand
//   CRP: CRP, BSM: BSM, ARM: ARM, GSM: GSM, LTW: LTW, WVR: WVR, ALC: ALC, CUL: CUL,

//   // Disciples of the Land
//   MIN: MIN, BTN: BTN, FSH: FSH,
// ];

// export default function Jobs(props) {
//   const [jobColor] = useState({ // Job Color
//     None: "#b0b0b0",
//     Tank: "#2d3a80",
//     Healer: "#346624",
//     Dps: "#732828",
//     DOH: "#5f4592",
//     DOL: "#bb9b51",
//   })
  
//   // const {
//   //   None, Tank, Healer, Dps, DOH, DOL
//   // } = jobColor;

//   const J = { // Job List
//     // Tank
//     GLA, PLD, MRD, WAR, DRK, GNB,
  
//     // Healer
//     CNJ, WHM, SCH, AST, SGE,
  
//     // DPS Melee
//     PGL, MNK, LNC, DRG, ROG, NIN, SAM, RPR,
  
//     // DPS Ranged Physical
//     ARC, BRD, MCH, DNC,
  
//     // DPS Ranged Magical
//     THM, BLM, ACN, SMN, RDM, BLU,
  
//     // Disciples of the Hand
//     CRP, BSM, ARM, GSM, LTW, WVR, ALC, CUL,
  
//     // Disciples of the Land
//     MIN, BTN, FSH,
//   };

//   const StyledLevel = styled.div`

//   z-index: 150;
//   font-weight: 700;
  
//   fill: ${(props) => jobColor[props.j]}
  
//   ${(props) =>
//     (props.lv == 0) &&
//     css`
//     fill: ${jobColor[0]};
//     span {
//       display: none;
//     }
//   `};

//   ${(props) =>
//     (props.i == 0) &&
//     css`
//     span {
//       font-size: 1.6rem;
//     };
    
//     svg {
//       width: 1.8rem;
//     }

//     ${Type_1}

//   `};
  
//   ${(props) =>
//     (props.i == 1) &&
//     css`
//     span {
//       font-size: 2.2rem;
//     };
    
//     svg {
//       width: 48px;
//     }

//     ${Type_2}

//   `};
  
//   `;

//   const Jobs = J[props.job];
//   return <StyledLevel {...props}>
//     <div id = {props.job}>
//       <Jobs className = {props.job} /><span>{props.lv}</span>
//     </div>
//   </StyledLevel>
// }


// const J = { // Job List
//   // Tank
//   GLA, PLD, MRD, WAR, DRK, GNB,

//   // Healer
//   CNJ, WHM, SCH, AST, SGE,

//   // DPS Melee
//   PGL, MNK, LNC, DRG, ROG, NIN, SAM, RPR,

//   // DPS Ranged Physical
//   ARC, BRD, MCH, DNC,

//   // DPS Ranged Magical
//   THM, BLM, ACN, SMN, RDM,

//   // Disciples of the Hand
//   CRP, BSM, ARM, GSM, LTW, WVR, ALC, CUL,

//   // Disciples of the Land
//   MIN, BTN, FSH,

//   // Something Special
//   BLU, ELE, RES,
// };

const jobColor = { // Job Color
  None: "#b0b0b0",
  Tank: "#4d5aa0",
  Healer: "#548644",
  Dps: "#934848",
  DOH: "#5f4592",
  DOL: "#bb9b51",
  Special: "#808080",
}

const StyledLevel = styled.div`
  
  // font-family: "Gamja Flower";
  // font-family: "KorailRoundGothicBold";
  font-family: "LINESeedKRBold";
  
  fill: ${jobColor[0]};
  
  span {
    display: none;
  }
  
  ${(props) =>
    (props.lv != 0) &&
    css`
    svg {
      fill: ${jobColor[props.j]};
    }
    span {
      display: block;
    }
  `};

  ${(props) =>
    (props.i == 1) &&
    css`
    ${Type_1}
  `};
  
  ${(props) =>
    (props.i == 2) &&
    css`
    ${Type_2}
  `};  
`;

export default function Jobs(props) {
  const Jobs = JobIconSVG[props.job];
  // const Jobs = JobIconPNG[props.job];
  return <StyledLevel {...props}>
    <div id = {props.job}>
      <Jobs className = {props.job} /><span>{props.lv}</span>
      {/* <img id = {props.job} className = {props.job} src = {Jobs} alt = {props.job} />
      <label htmlFor = {props.job}>{props.lv}</label> */}
    </div>
  </StyledLevel>
}

// function LoadJob({ children, ...props }) {
//   return <StyledLevel {...props}>{children}</StyledLevel>;
// }

// export default function Jobs(props) {
//   const Jobs = jobs[props.job];
//   return <Jobs />;
// }