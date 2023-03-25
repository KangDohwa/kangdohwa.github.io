import React, { useState,
  //  useCallback, useRef, createRef, useEffect,
   } from "react";

import domtoimage from "dom-to-image";

import imgPreviewPre from "./images/Preview_Pre.png";
import imgBackground from "./images/bg_v3.png";

// eslint-disable-next-line no-unused-vars
import FileSaver from "file-saver"; // actually using

// { // import job icons from individual svg files
// // Tank
// import { ReactComponent as GLA } from "./images/job/1.Tank/GLA.svg";     // 검술사
// import { ReactComponent as PLD } from "./images/job/1.Tank/PLD.svg";     // 나이트
// import { ReactComponent as MRD } from "./images/job/1.Tank/MRD.svg";     // 도끼술사
// import { ReactComponent as WAR } from "./images/job/1.Tank/WAR.svg";     // 전사
// import { ReactComponent as DRK } from "./images/job/1.Tank/DRK.svg";     // 암흑기사
// import { ReactComponent as GNB } from "./images/job/1.Tank/GNB.svg";     // 건브레이커

// // Healer
// import { ReactComponent as CNJ } from "./images/job/2.Heal/CNJ.svg";     // 환술사
// import { ReactComponent as WHM } from "./images/job/2.Heal/WHM.svg";     // 백마도사
// import { ReactComponent as SCH } from "./images/job/2.Heal/SCH.svg";     // 학자
// import { ReactComponent as AST } from "./images/job/2.Heal/AST.svg";     // 점성술사
// import { ReactComponent as SGE } from "./images/job/2.Heal/SGE.svg";     // 현자

// // DPS Melee
// import { ReactComponent as PGL } from "./images/job/3.DPS_M/PGL.svg";    // 격투사
// import { ReactComponent as MNK } from "./images/job/3.DPS_M/MNK.svg";    // 몽크
// import { ReactComponent as LNC } from "./images/job/3.DPS_M/LNC.svg";    // 창술사
// import { ReactComponent as DRG } from "./images/job/3.DPS_M/DRG.svg";    // 용기사
// import { ReactComponent as ROG } from "./images/job/3.DPS_M/ROG.svg";    // 쌍검사
// import { ReactComponent as NIN } from "./images/job/3.DPS_M/NIN.svg";    // 닌자
// import { ReactComponent as SAM } from "./images/job/3.DPS_M/SAM.svg";    // 사무라이
// import { ReactComponent as RPR } from "./images/job/3.DPS_M/RPR.svg";    // 리퍼

// // DPS Ranged Physical
// import { ReactComponent as ARC } from "./images/job/4.DPS_RP/ARC.svg";   // 궁술사
// import { ReactComponent as BRD } from "./images/job/4.DPS_RP/BRD.svg";   // 음유시인
// import { ReactComponent as MCH } from "./images/job/4.DPS_RP/MCH.svg";   // 기공사
// import { ReactComponent as DNC } from "./images/job/4.DPS_RP/DNC.svg";   // 무도가

// // DPS Ranged Magical
// import { ReactComponent as THM } from "./images/job/5.DPS_RM/THM.svg";   // 주술사
// import { ReactComponent as BLM } from "./images/job/5.DPS_RM/BLM.svg";   // 흑마도사
// import { ReactComponent as ACN } from "./images/job/5.DPS_RM/ACN.svg";   // 비술사
// import { ReactComponent as SMN } from "./images/job/5.DPS_RM/SMN.svg";   // 소환사
// import { ReactComponent as RDM } from "./images/job/5.DPS_RM/RDM.svg";   // 적마도사
// import { ReactComponent as BLU } from "./images/job/5.DPS_RM/BLU.svg";   // 청마도사

// // Disciples of the Hand
// import { ReactComponent as CRP } from "./images/job/6.DOH/CRP.svg";      // 목수
// import { ReactComponent as BSM } from "./images/job/6.DOH/BSM.svg";      // 대장장이
// import { ReactComponent as ARM } from "./images/job/6.DOH/ARM.svg";      // 갑주제작사
// import { ReactComponent as GSM } from "./images/job/6.DOH/GSM.svg";      // 보석공예가
// import { ReactComponent as LTW } from "./images/job/6.DOH/LTW.svg";      // 가죽공예가
// import { ReactComponent as WVR } from "./images/job/6.DOH/WVR.svg";      // 재봉사
// import { ReactComponent as ALC } from "./images/job/6.DOH/ALC.svg";      // 연금술사
// import { ReactComponent as CUL } from "./images/job/6.DOH/CUL.svg";      // 요리사

// // Disciples of the Land
// import { ReactComponent as MIN } from "./images/job/7.DOL/MIN.svg";      // 광부
// import { ReactComponent as BTN } from "./images/job/7.DOL/BTN.svg";      // 원예가
// import { ReactComponent as FSH } from "./images/job/7.DOL/FSH.svg";      // 어부
// }

import FileInput from "./FileInput";
import IconLoader from "./IconLoader";
import IconLoaderSC from "./IconLoaderSC";

import "./Core.scss";

function downloadDivAsPng() { // save image
  domtoimage.toBlob(document.getElementsByClassName("box")[0])
    .then(function (blob) {
      window.saveAs(blob, "Test.png")
    });

  // domtoimage.toBlob(document.getElementById("final-canvas"))
  // .then(function (blob) {
  //   window.saveAs(blob, "Test.png")
  // });

  // var div = document.getElementById("preview-final");
  // domtoimage.toBlob(div)
    //   const link = document.createElement("a");
    //   link.download = "test-png";
    //   link.href = dataUrl;
    //   document.appendChild(link);
    //   link.click();
    //   document.removeChild(link);
    // })
    // .catch(function (error) {
    //   console.error("Error while generating PNG : ", error);
    // });
}

function MakeJobInput(props) { // function make input field
  return (
    <input 
      className = {props.job}
      type = "number"
      name = {props.job}
      value = {props.value}
      onChange = {props.fc}
      min = "0"
      max = "90"
    />
  )
}

function MyPage() {
  // const [imageSrc, setImageSrc] = useState("");

  // // Prevent image crash
  // const encodeFileToBase64 = (fileBlob) => { // FileReader
  //   const reader = new FileReader();
    
  //   reader.readAsDataURL(fileBlob);
    
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       const result = reader.result
  //       setImageSrc(result);
  //       resolve();
  //     };
  //   });
  // };

  const [urlImage, setUrlImage] = useState("");

  const createImageURL = (fileBlob) => { // createObjectURL
    if (urlImage) URL.revokeObjectURL(urlImage); // revoke for rem

    const url = URL.createObjectURL(fileBlob);

    setUrlImage(url);
  };

  const onImageChange = (e) => { // createObjectURL Upload
    const { files } = e.target;

    if (!files || !files[0]) return;

    const uploadImage = files[0];
    createImageURL(uploadImage);
  };

  const [index, setIndex] = useState([]); // style selector state
  
  const [idValue, setId] = useState("");
  const [pwValue, setPw] = useState("");

  const [lv,setLv] = useState({ // jobs define
    // Tank
    lvGLA: "", lvPLD: "", lvMRD: "", lvWAR: "", lvDRK: "", lvGNB: "",
  
    // Healer
    lvCNJ: "", lvWHM: "", lvSCH: "", lvAST: "", lvSGE: "",
  
    // DPS Melee
    lvPGL: "", lvMNK: "", lvLNC: "", lvDRG: "", lvROG: "", lvNIN: "", lvSAM: "", lvRPR: "",
  
    // DPS Ranged Physical
    lvARC: "", lvBRD: "", lvMCH: "", lvDNC: "",
  
    // DPS Ranged Magical
    lvTHM: "", lvBLM: "", lvACN: "", lvSMN: "", lvRDM: "", lvBLU: "",
  
    // Disciples of the Hand
    lvCRP: "", lvBSM: "", lvARM: "", lvGSM: "", lvLTW: "", lvWVR: "", lvALC: "", lvCUL: "",
  
    // Disciples of the Land
    lvMIN: "", lvBTN: "", lvFSH: "",
  })

  const { // jobs array define
    // Tank
    lvGLA, lvPLD, lvMRD, lvWAR, lvDRK, lvGNB,
  
    // Healer
    lvCNJ, lvWHM, lvSCH, lvAST, lvSGE,
  
    // DPS Melee
    lvPGL, lvMNK, lvLNC, lvDRG, lvROG, lvNIN, lvSAM, lvRPR,
  
    // DPS Ranged Physical
    lvARC, lvBRD, lvMCH, lvDNC,
  
    // DPS Ranged Magical
    lvTHM, lvBLM, lvACN, lvSMN, lvRDM, lvBLU,
  
    // Disciples of the Hand
    lvCRP, lvBSM, lvARM, lvGSM, lvLTW, lvWVR, lvALC, lvCUL,
  
    // Disciples of the Land
    lvMIN, lvBTN, lvFSH,
  } = lv;

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const selectIndex = event => { // style selector function
    setIndex(event.target.value);
  };

  const changeLv = event => {
    setLv({
      ...lv,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className = "container">
      <div className = "custom-box">
        <div className = "preview"> {/* image upload/download button div */}
          <FileInput label = "사진 업로드" onChange = {onImageChange} comment = "Only support 16:9 image"/>
          <button onClick = {downloadDivAsPng}>다운로드 dap</button>
        </div>
        <fieldset className = "type-select"> {/* type selecting radio buttons */}
          <label>
            <input 
              className = "type1"
              type = "radio"
              value = "0"
              checked = {index === "0"}
              onChange = {selectIndex}
            /> <span>Ind.0</span>
          </label>
          <label>
            <input 
              className = "type2"
              type = "radio"
              value = "1"
              checked = {index === "1"}
              onChange = {selectIndex}
            /> <span>Ind.1</span>
          </label>
          <label>
            <input 
              className = "type3"
              type = "radio"
              value = "2"
              checked = {index === "2"}
              onChange = {selectIndex}
            /> <span>Ind.2</span>
          </label>
        </fieldset>
        <div className = "input-desc">
          <input 
            className = "id"
            type = "text"
            placeholder = "Nickname"
            value = {idValue}
            onChange = {saveUserId}
          />
          <input 
            className = "pw"
            type = "text"
            placeholder = "password"
            value = {pwValue}
            onChange = {saveUserPw}
          />
        </div>
        <div className = "input-level">
          <div className = "input-tank">
          {/* <input 
            className = "lv_PLD"
            type = "number"
            name = "lvPLD"
            value = {lvPLD}
            onChange = {changeLv}
          />
          <input 
            className = "lv_DRK"
            type = "number"
            name = "lvDRK"
            value = {lvDRK}
            onChange = {changeLv}
          />
          <input 
            className = "lv_WAR"
            type = "number"
            name = "lvWAR"
            value = {lvWAR}
            onChange = {changeLv}
          /> */}
            <MakeJobInput job = "lvPLD" value = {lvPLD} fc = {changeLv} />
            <MakeJobInput job = "lvWAR" value = {lvWAR} fc = {changeLv} />
            <MakeJobInput job = "lvDRK" value = {lvDRK} fc = {changeLv} />
            <MakeJobInput job = "lvGNB" value = {lvGNB} fc = {changeLv} />
          </div>
          <div className = "input-healer">
            <MakeJobInput job = "lvWHM" value = {lvWHM} fc = {changeLv} />
            <MakeJobInput job = "lvSCH" value = {lvSCH} fc = {changeLv} />
            <MakeJobInput job = "lvAST" value = {lvAST} fc = {changeLv} />
            <MakeJobInput job = "lvSGE" value = {lvSGE} fc = {changeLv} />
          </div>
          <div className = "input-dps-melee">
            <MakeJobInput job = "lvDRG" value = {lvDRG} fc = {changeLv} />
            <MakeJobInput job = "lvMNK" value = {lvMNK} fc = {changeLv} />
            <MakeJobInput job = "lvNIN" value = {lvNIN} fc = {changeLv} />
            <MakeJobInput job = "lvRPR" value = {lvRPR} fc = {changeLv} />
            <MakeJobInput job = "lvSAM" value = {lvSAM} fc = {changeLv} />
          </div>
        </div>
      </div>
      <div className = "box">
        <div className = "preview-final">
          {urlImage ? (
            <img className = "img-preview" src = {urlImage} alt = "urlImage" />
          ) : ( 
            <img className = "img-preview-pre" src = {imgPreviewPre} alt = "예시 이미지" />
          )}
          <img className = "img-Background" src = {imgBackground} alt = "BG" />
          <div className = "preview-icon">
            <div className = "Tank">
              <IconLoader job = "PLD" i = {index} lv = {lvPLD} />
              <IconLoader job = "WAR" i = {index} lv = {lvWAR} />
              <IconLoader job = "DRK" i = {index} lv = {lvDRK} />
              <IconLoaderSC job = "GNB" i = {index} j = "Tank" lv = {lvGNB} />
            </div>
            <div className = "Healer">
              <IconLoader job = "WHM" i = {index} lv = {lvWHM} />
              <IconLoader job = "SCH" i = {index} lv = {lvSCH} />
              <IconLoader job = "AST" i = {index} lv = {lvAST} />
              <IconLoaderSC job = "SGE" i = {index} j = "Healer" lv = {lvSGE} />
            </div>
            <div className = "DpsM">
              <IconLoader job = "DRG" j = "None" lv = {lvDRG} />
              <IconLoader job = "MNK" j = "Tank" lv = {lvMNK} />
              <IconLoader job = "NIN" j = "Healer" lv = {lvNIN} />
              <IconLoader job = "RPR" j = "Dps" lv = {lvRPR} />
              <IconLoaderSC job = "SAM" i = {index} j = "Dps" lv = {lvSAM} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;