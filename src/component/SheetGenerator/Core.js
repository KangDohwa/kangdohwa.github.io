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
// import IconLoader from "./IconLoader";
import IconLoaderSC from "./IconLoaderSC";
import StatusLoaderSC from "./StatusLoaderSC";
import TextLoaderSC from "./TextLoaderSC";

import INew from "./images/status/Newbie.png";
import IRNew from "./images/status/Return.png";
import IMPVE from "./images/status/MPVE.png";
import IMPRP from "./images/status/MPRP.png";
import IMPVP from "./images/status/MPVP.png";

import "./Core.scss";

const Jname = { // jobs define
  // Tank
  lvGLA: "검투사", lvPLD: "나이트", lvMRD: "도끼술사", lvWAR: "전사", 
  lvDRK: "암흑기사", lvGNB: "건브레이커",

  // Healer
  lvCNJ: "환술사", lvWHM: "백마도사", lvSCH: "학자", lvAST: "점성술사", lvSGE: "현자",

  // DPS Melee
  lvPGL: "격투사", lvMNK: "몽크", lvLNC: "창술사", lvDRG: "용기사", 
  lvROG: "쌍검사", lvNIN: "닌자", lvSAM: "사무라이", lvRPR: "리퍼",

  // DPS Ranged Physical
  lvARC: "궁술사", lvBRD: "음유시인", lvMCH: "기공사", lvDNC: "무도가",

  // DPS Ranged Magical
  lvTHM: "주술사", lvBLM: "흑마도사", lvACN: "비술사", lvSMN: "소환사", lvRDM: "적마도사",

  // Disciples of the Hand
  lvCRP: "목수", lvBSM: "대장장이", lvARM: "갑주제작사", lvGSM: "보석공예가", 
  lvLTW: "가죽공예가", lvWVR: "재봉사", lvALC: "연금술사", lvCUL: "요리사",

  // Disciples of the Land
  lvMIN: "광부", lvBTN: "원예가", lvFSH: "어부",

  // Something Special
  lvBLU: "청마도사", lvELE: "엘리멘탈", lvRES: "레지스탕스",
};

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
};

function MakeTextInput(props) {
  return (
    <input 
      className = {props.name}
      type = "text"
      name = {props.name}
      placeholder = {props.PH}
      value = {props.t}
      onChange = {props.fc}
    />
  )
};

function MakeJobInput(props) { // function make input field
  return (
    <>
      <div className = {props.type}>{Jname[props.job]}
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

function MakeStatusBox(props) {
  return (
    <input 
      className = {props.stat}
      type = "checkbox"
      name = {props.stat}
      checked = {props.value}
      onChange = {props.fc}
    />
  )
};

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
  
  const [text, setText] = useState({
    Name: "", Title: "", FC: "", FCs: "",
    Style: "", Like: "", Dislike: "", Desc: "",
  });

  const [lv, setLv] = useState({ // jobs define
    // Tank
    lvGLA: "", lvPLD: "", lvMRD: "", lvWAR: "", lvDRK: "", lvGNB: "",
  
    // Healer
    lvCNJ: "", lvWHM: "", lvSCH: "", lvAST: "", lvSGE: "",
  
    // DPS Melee
    lvPGL: "", lvMNK: "", lvLNC: "", lvDRG: "", lvROG: "", lvNIN: "", lvSAM: "", lvRPR: "",
  
    // DPS Ranged Physical
    lvARC: "", lvBRD: "", lvMCH: "", lvDNC: "",
  
    // DPS Ranged Magical
    lvTHM: "", lvBLM: "", lvACN: "", lvSMN: "", lvRDM: "",
  
    // Disciples of the Hand
    lvCRP: "", lvBSM: "", lvARM: "", lvGSM: "", lvLTW: "", lvWVR: "", lvALC: "", lvCUL: "",
  
    // Disciples of the Land
    lvMIN: "", lvBTN: "", lvFSH: "",

    // Something Special
    lvBLU: "", lvELE: "", lvRES: "",
  })

  // const [isCheck, setIsCheck] = useState(false); // status check
  const [isCheck, setIsCheck] = useState({
    New: false, RNew: false, MPVE: false, MPRP: false, MPVP: false,
  })

  

  const {
    Name, Title, FC, FCs,
    Style, Like, Dislike, Desc,
  } = text;

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
    lvTHM, lvBLM, lvACN, lvSMN, lvRDM,
  
    // Disciples of the Hand
    lvCRP, lvBSM, lvARM, lvGSM, lvLTW, lvWVR, lvALC, lvCUL,
  
    // Disciples of the Land
    lvMIN, lvBTN, lvFSH,

    // Something Special
    lvBLU, lvELE, lvRES
  } = lv;

  const {
    New, RNew, MPVE, MPRP, MPVP,
  } = isCheck;

  const changeText = event => {
    setText({
      ...text,
      [event.target.name]: event.target.value
    });
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

  const statusCheck = event => {
    // setIsCheck(!isCheck);
    setIsCheck({
      ...isCheck,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className = "container">
      <div className = "custom-box">
        <div className = "preview"> {/* image upload/download button div */}
          <FileInput label = "사진 업로드" onChange = {onImageChange} comment = "현재 16:9 비율의 사진만 지원합니다."/>
        </div>
        <div className = "input-desc">
          <MakeTextInput name = "Name" t = {Name} fc = {changeText} PH = "닉네임" />
          <MakeTextInput name = "Title" t = {Title} fc = {changeText} PH = "칭호" />
          <MakeTextInput name = "FC" t = {FC} fc = {changeText} PH = "자유부대" />
          <MakeTextInput name = "FCs" t = {FCs} fc = {changeText} PH = "약칭" />
        </div>
        <div className = "check-status">
          <MakeStatusBox stat = "New" value = {New} fc = {statusCheck} />새싹
          <MakeStatusBox stat = "RNew" value = {RNew} fc = {statusCheck} />복귀
          <MakeStatusBox stat = "MPVE" value = {MPVE} fc = {statusCheck} />전투 멘토
          <MakeStatusBox stat = "MPRP" value = {MPRP} fc = {statusCheck} />제작/채집 멘토
          <MakeStatusBox stat = "MPVP" value = {MPVP} fc = {statusCheck} />PVP 멘토
        </div>
        <div className = "input-level">
          <div className = "tank">
            <MakeJobInput job = "lvPLD" value = {lvPLD} fc = {changeLv} type = "Tank" />
            <MakeJobInput job = "lvWAR" value = {lvWAR} fc = {changeLv} type = "Tank" />
            <MakeJobInput job = "lvDRK" value = {lvDRK} fc = {changeLv} type = "Tank" />
            <MakeJobInput job = "lvGNB" value = {lvGNB} fc = {changeLv} type = "Tank" />
          </div>
          <div className = "healer">
            <MakeJobInput job = "lvWHM" value = {lvWHM} fc = {changeLv} type = "Healer" />
            <MakeJobInput job = "lvSCH" value = {lvSCH} fc = {changeLv} type = "Healer" />
            <MakeJobInput job = "lvAST" value = {lvAST} fc = {changeLv} type = "Healer" />
            <MakeJobInput job = "lvSGE" value = {lvSGE} fc = {changeLv} type = "Healer" />
          </div>
          <div className = "dps-m">
            <MakeJobInput job = "lvDRG" value = {lvDRG} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvMNK" value = {lvMNK} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvNIN" value = {lvNIN} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvRPR" value = {lvRPR} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvSAM" value = {lvSAM} fc = {changeLv} type = "DPS" />
          </div>
          <div className = "dps-rp">
            <MakeJobInput job = "lvBRD" value = {lvBRD} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvMCH" value = {lvMCH} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvDNC" value = {lvDNC} fc = {changeLv} type = "DPS" />
          </div>
          <div className = "dps-rm">
            <MakeJobInput job = "lvBLM" value = {lvBLM} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvSMN" value = {lvSMN} fc = {changeLv} type = "DPS" />
            <MakeJobInput job = "lvRDM" value = {lvRDM} fc = {changeLv} type = "DPS" />
          </div>
          <div className = "doh1">
            <MakeJobInput job = "lvCRP" value = {lvCRP} fc = {changeLv} type = "DOH" />
            <MakeJobInput job = "lvBSM" value = {lvBSM} fc = {changeLv} type = "DOH" />
            <MakeJobInput job = "lvARM" value = {lvARM} fc = {changeLv} type = "DOH" />
            <MakeJobInput job = "lvGSM" value = {lvGSM} fc = {changeLv} type = "DOH" />
          </div>
          <div className = "doh2">
            <MakeJobInput job = "lvLTW" value = {lvLTW} fc = {changeLv} type = "DOH" />
            <MakeJobInput job = "lvWVR" value = {lvWVR} fc = {changeLv} type = "DOH" />
            <MakeJobInput job = "lvALC" value = {lvALC} fc = {changeLv} type = "DOH" />
            <MakeJobInput job = "lvCUL" value = {lvCUL} fc = {changeLv} type = "DOH" />
          </div>
          <div className = "dol">
            <MakeJobInput job = "lvMIN" value = {lvMIN} fc = {changeLv} type = "DOL" />
            <MakeJobInput job = "lvBTN" value = {lvBTN} fc = {changeLv} type = "DOL" />
            <MakeJobInput job = "lvFSH" value = {lvFSH} fc = {changeLv} type = "DOL" />
          </div>
          <div className = "special">
            <MakeJobInput job = "lvBLU" value = {lvBLU} fc = {changeLv} type = "SPC" />
            <MakeJobInput job = "lvELE" value = {lvELE} fc = {changeLv} type = "SPC" />
            <MakeJobInput job = "lvRES" value = {lvRES} fc = {changeLv} type = "SPC" />
          </div>
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
        <button onClick = {downloadDivAsPng}>다운로드</button>
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
            <div className = "PlayerInfo">
              <TextLoaderSC name = "Name" i = {index} t = {Name} />
              <TextLoaderSC name = "Title" i = {index} t = {Title} />
              <TextLoaderSC name = "FC" i = {index} t = {FC} />
              <TextLoaderSC name = "FCs" i = {index} t = {FCs} />
            </div>
            <div className = "PlayerStatus">
              <StatusLoaderSC stat = "New" i = {index} src = {INew} c = {New} />
              <StatusLoaderSC stat = "RNew" i = {index} src = {IRNew} c = {RNew} />
              <StatusLoaderSC stat = "MPVE" i = {index} src = {IMPVE} c = {MPVE} />
              <StatusLoaderSC stat = "MPRP" i = {index} src = {IMPRP} c = {MPRP} />
              <StatusLoaderSC stat = "MPVP" i = {index} src = {IMPVP} c = {MPVP} />
            </div>
            <div className = "Tank">
              <IconLoaderSC job = "PLD" i = {index} j = "Tank" lv = {lvPLD} />
              <IconLoaderSC job = "WAR" i = {index} j = "Tank" lv = {lvWAR} />
              <IconLoaderSC job = "DRK" i = {index} j = "Tank" lv = {lvDRK} />
              <IconLoaderSC job = "GNB" i = {index} j = "Tank" lv = {lvGNB} />
            </div>
            <div className = "Healer">
              <IconLoaderSC job = "WHM" i = {index} j = "Healer" lv = {lvWHM} />
              <IconLoaderSC job = "SCH" i = {index} j = "Healer" lv = {lvSCH} />
              <IconLoaderSC job = "AST" i = {index} j = "Healer" lv = {lvAST} />
              <IconLoaderSC job = "SGE" i = {index} j = "Healer" lv = {lvSGE} />
            </div>
            <div className = "DpsM">
              <IconLoaderSC job = "DRG" i = {index} j = "Dps" lv = {lvDRG} />
              <IconLoaderSC job = "MNK" i = {index} j = "Dps" lv = {lvMNK} />
              <IconLoaderSC job = "NIN" i = {index} j = "Dps" lv = {lvNIN} />
              <IconLoaderSC job = "RPR" i = {index} j = "Dps" lv = {lvRPR} />
              <IconLoaderSC job = "SAM" i = {index} j = "Dps" lv = {lvSAM} />
            </div>
            <div className = "DpsRP">
              <IconLoaderSC job = "BRD" i = {index} j = "Dps" lv = {lvBRD} />
              <IconLoaderSC job = "MCH" i = {index} j = "Dps" lv = {lvMCH} />
              <IconLoaderSC job = "DNC" i = {index} j = "Dps" lv = {lvDNC} />
            </div>
            <div className = "DpsRM">
              <IconLoaderSC job = "BLM" i = {index} j = "Dps" lv = {lvBLM} />
              <IconLoaderSC job = "SMN" i = {index} j = "Dps" lv = {lvSMN} />
              <IconLoaderSC job = "RDM" i = {index} j = "Dps" lv = {lvRDM} />
            </div>
            <div className = "DOH">
              <IconLoaderSC job = "CRP" i = {index} j = "DOH" lv = {lvCRP} />
              <IconLoaderSC job = "BSM" i = {index} j = "DOH" lv = {lvBSM} />
              <IconLoaderSC job = "ARM" i = {index} j = "DOH" lv = {lvARM} />
              <IconLoaderSC job = "GSM" i = {index} j = "DOH" lv = {lvGSM} />
              <IconLoaderSC job = "LTW" i = {index} j = "DOH" lv = {lvLTW} />
              <IconLoaderSC job = "WVR" i = {index} j = "DOH" lv = {lvWVR} />
              <IconLoaderSC job = "ALC" i = {index} j = "DOH" lv = {lvALC} />
              <IconLoaderSC job = "CUL" i = {index} j = "DOH" lv = {lvCUL} />
            </div>
            <div className = "DOL">
              <IconLoaderSC job = "MIN" i = {index} j = "DOL" lv = {lvMIN} />
              <IconLoaderSC job = "BTN" i = {index} j = "DOL" lv = {lvBTN} />
              <IconLoaderSC job = "FSH" i = {index} j = "DOL" lv = {lvFSH} />
            </div>
            <div className = "Special">
              <IconLoaderSC job = "BLU" i = {index} j = "Special" lv = {lvBLU} />
              <IconLoaderSC job = "ELE" i = {index} j = "Special" lv = {lvELE} />
              <IconLoaderSC job = "RES" i = {index} j = "Special" lv = {lvRES} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;