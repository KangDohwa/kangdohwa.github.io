import React, { useState } from "react";
import styled, { css } from "styled-components";

// Tank
import { ReactComponent as GLA } from "./images/job/1.Tank/GLA.svg";     // 검술사
import { ReactComponent as PLD } from "./images/job/1.Tank/PLD.svg";     // 나이트
import { ReactComponent as MRD } from "./images/job/1.Tank/MRD.svg";     // 도끼술사
import { ReactComponent as WAR } from "./images/job/1.Tank/WAR.svg";     // 전사
import { ReactComponent as DRK } from "./images/job/1.Tank/DRK.svg";     // 암흑기사
import { ReactComponent as GNB } from "./images/job/1.Tank/GNB.svg";     // 건브레이커

// Healer
import { ReactComponent as CNJ } from "./images/job/2.Heal/CNJ.svg";     // 환술사
import { ReactComponent as WHM } from "./images/job/2.Heal/WHM.svg";     // 백마도사
import { ReactComponent as SCH } from "./images/job/2.Heal/SCH.svg";     // 학자
import { ReactComponent as AST } from "./images/job/2.Heal/AST.svg";     // 점성술사
import { ReactComponent as SGE } from "./images/job/2.Heal/SGE.svg";     // 현자

// DPS Melee
import { ReactComponent as PGL } from "./images/job/3.DPS_M/PGL.svg";    // 격투사
import { ReactComponent as MNK } from "./images/job/3.DPS_M/MNK.svg";    // 몽크
import { ReactComponent as LNC } from "./images/job/3.DPS_M/LNC.svg";    // 창술사
import { ReactComponent as DRG } from "./images/job/3.DPS_M/DRG.svg";    // 용기사
import { ReactComponent as ROG } from "./images/job/3.DPS_M/ROG.svg";    // 쌍검사
import { ReactComponent as NIN } from "./images/job/3.DPS_M/NIN.svg";    // 닌자
import { ReactComponent as SAM } from "./images/job/3.DPS_M/SAM.svg";    // 사무라이
import { ReactComponent as RPR } from "./images/job/3.DPS_M/RPR.svg";    // 리퍼

// DPS Ranged Physical
import { ReactComponent as ARC } from "./images/job/4.DPS_RP/ARC.svg";   // 궁술사
import { ReactComponent as BRD } from "./images/job/4.DPS_RP/BRD.svg";   // 음유시인
import { ReactComponent as MCH } from "./images/job/4.DPS_RP/MCH.svg";   // 기공사
import { ReactComponent as DNC } from "./images/job/4.DPS_RP/DNC.svg";   // 무도가

// DPS Ranged Magical
import { ReactComponent as THM } from "./images/job/5.DPS_RM/THM.svg";   // 주술사
import { ReactComponent as BLM } from "./images/job/5.DPS_RM/BLM.svg";   // 흑마도사
import { ReactComponent as ACN } from "./images/job/5.DPS_RM/ACN.svg";   // 비술사
import { ReactComponent as SMN } from "./images/job/5.DPS_RM/SMN.svg";   // 소환사
import { ReactComponent as RDM } from "./images/job/5.DPS_RM/RDM.svg";   // 적마도사
import { ReactComponent as BLU } from "./images/job/5.DPS_RM/BLU.svg";   // 청마도사

// Disciples of the Hand
import { ReactComponent as CRP } from "./images/job/6.DOH/CRP.svg";      // 목수
import { ReactComponent as BSM } from "./images/job/6.DOH/BSM.svg";      // 대장장이
import { ReactComponent as ARM } from "./images/job/6.DOH/ARM.svg";      // 갑주제작사
import { ReactComponent as GSM } from "./images/job/6.DOH/GSM.svg";      // 보석공예가
import { ReactComponent as LTW } from "./images/job/6.DOH/LTW.svg";      // 가죽공예가
import { ReactComponent as WVR } from "./images/job/6.DOH/WVR.svg";      // 재봉사
import { ReactComponent as ALC } from "./images/job/6.DOH/ALC.svg";      // 연금술사
import { ReactComponent as CUL } from "./images/job/6.DOH/CUL.svg";      // 요리사

// Disciples of the Land
import { ReactComponent as MIN } from "./images/job/7.DOL/MIN.svg";      // 광부
import { ReactComponent as BTN } from "./images/job/7.DOL/BTN.svg";      // 원예가
import { ReactComponent as FSH } from "./images/job/7.DOL/FSH.svg";      // 어부

import { Type_1, Type_2 } from "./Type.js";

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



export default function Jobs({ children, ...props }) {
  const [jobColor] = useState({ // Job Color
    None: "#b0b0b0",
    Tank: "#2d3a80",
    Healer: "#346624",
    Dps: "#732828",
    DOH: "#5f4592",
    DOL: "#bb9b51",
  })
  
  const {
    None, Tank, Healer, Dps, DOH, DOL
  } = jobColor;

  const J = { // Job List
    // Tank
    GLA, PLD, MRD, WAR, DRK, GNB,
  
    // Healer
    CNJ, WHM, SCH, AST, SGE,
  
    // DPS Melee
    PGL, MNK, LNC, DRG, ROG, NIN, SAM, RPR,
  
    // DPS Ranged Physical
    ARC, BRD, MCH, DNC,
  
    // DPS Ranged Magical
    THM, BLM, ACN, SMN, RDM, BLU,
  
    // Disciples of the Hand
    CRP, BSM, ARM, GSM, LTW, WVR, ALC, CUL,
  
    // Disciples of the Land
    MIN, BTN, FSH,
  };

  const StyledLevel = styled.div`

  svg {
    width: 32px;
  }

  left: 100px;
  top: 200px;
  z-index: 150;
  
  fill: ${(props) => jobColor[props.j]}

  ${(props) =>
    (props.lv == 0) &&
    css`
    fill: ${jobColor[None]};
    span {
      display: none;
    }
  `};

  ${(props) =>
    (props.i == 0) && (props.j == "Tank") &&
    css`
    left: 150px;
  `};

  ${(props) =>
    (props.i == 0) &&
    css`
    span {
      font-size: 2.2rem;
    };
    
    svg {
      width: 48px;
    }

    ${Type_1}

  `};
  
  ${(props) =>
    (props.i == 1) &&
    css`
    span {
      font-size: 2.2rem;
    };
    
    svg {
      width: 48px;
    }

    ${Type_2}

  `};
  
  `;

  const Jobs = J[props.job];
  return <div>
    <StyledLevel {...props}>
      <div id = {props.job}>{children}
        <Jobs className = {props.job} /><span>{props.lv}</span>
      </div>
    </StyledLevel>
  </div>;
}

// export default function Jobs(props) {
//   const Jobs = jobs[props.job];
//   return <Jobs />;
// }