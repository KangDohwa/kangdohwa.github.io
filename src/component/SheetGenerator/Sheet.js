/* eslint-disable no-unused-vars */

import React, { useState
  //  useCallback, useRef, createRef, useEffect,
  } from "react";

import FileSaver from "file-saver"; // actually using i think but idk actually

import BG_None from "./images/bg/Bg_None.png";

import FileUpload from "./function/FileUpload";
import LoaderBG from "./function/LoaderBG";
import LoaderIcon from "./function/LoaderIcon";
import LoaderStatus from "./function/LoaderStatus";
import LoaderText from "./function/LoaderText";

import INew from "./images/status/Newbie.png";
import IRNew from "./images/status/Return.png";
import IMPVE from "./images/status/MPVE.png";
import IMPRP from "./images/status/MPRP.png";
import IMPVP from "./images/status/MPVP.png";

import Description from "./function/Description";
import InputText from "./function/InputText";
import InputJob from "./function/InputJob";
import InputStatus from "./function/InputStatus";
import InputType from "./function/InputType";

import SheetFooter from "./SheetFooter";

import { toPng } from "html-to-image";

import "./Sheet.scss";
import { analytics, logEvent } from "@src/firebase";

function Sheet() {
  const [urlImage, setUrlImage] = useState("");
  
  const [index, setIndex] = useState([1]); // style selector state

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
  
  const [text, setText] = useState({
    Name: "", Title: "", FC: "", FCs: "", Server: "",
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
    Name, Title, FC, FCs, Server,
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
    setIsCheck({
      ...isCheck,
      [event.target.name]: event.target.checked,
    });
  };

  // const showPreview = () => { // Legacy Preview refresh / Download function
  //   toPng(document.getElementById("R"), {width: 1350, height: 1080})
  //     .then(function (dataUrl) {
  //       var img = new Image();
  //       img.src = dataUrl;
  //       img.id = "PI";
  //       const area = document.getElementById("PreviewUser");
  //       console.log(area.hasChildNodes());
  //       if (area.hasChildNodes()) {
  //         // console.log("run condition");
  //         const oldimg = document.getElementById("PI");
  //         area.replaceChild(img, oldimg);
  //         // console.log("replaced");
  //       } else {
  //         // console.log("run else");
  //         area.appendChild(img);
  //         // console.log("append");
  //       };
  //     });
  // };

  // const saveAsPNG = () => {
  //   const saveName = "시트 - " + new Date().toLocaleTimeString();
  //   toPng(document.getElementById("R"), {width: 1350, height: 1080})
  //     .then(function (blob) {
  //       if (window.saveAs) {
  //         window.saveAs(blob, saveName);
  //       } else {
  //         FileSaver.saveAs(blob, saveName);
  //       }
  //     });
  // };

  function saveAsPNG() {
    logEvent(analytics, "sg_save_image");
    alert("PNG 파일로 저장합니다. 잠시만 기다려주세요!")
    const saveName = "시트 - " + new Date().toLocaleTimeString();
    toPng(document.getElementById("R"))
      .then(async function (blob) {
        if (window.saveAs) {
          await window.saveAs(blob, saveName);
        } else {
          await  FileSaver.saveAs(blob, saveName);
        }
    });
  };

  return (
    <div className = "Sheet">
      <div className = "Info">
        <Description />
        <div className = "InputTextInfo">{/* Information Input Field */}
          <InputText name = "Name" t = {Name} fc = {changeText} PH = "닉네임" />
          <InputText name = "Title" t = {Title} fc = {changeText} PH = "칭호" />
          <InputText name = "FC" t = {FC} fc = {changeText} PH = "자유부대" />
          <InputText name = "FCs" t = {FCs} fc = {changeText} PH = "약칭" />
          <InputText name = "Server" t = {Server} fc = {changeText} PH = "서버" />
        </div>
        <div className = "InputTextDesc">{/* Description Input Field */}
          <InputText name = "Style" t = {Style} fc = {changeText} PH = "성향" />
          <InputText name = "Like" t = {Like} fc = {changeText} PH = "좋아요" />
          <InputText name = "Dislike" t = {Dislike} fc = {changeText} PH = "싫어요" />
          <InputText name = "Desc" t = {Desc} fc = {changeText} PH = "한마디" />
        </div>
        <div className = "InputStatus">{/* Status Check Box */}
          <InputStatus stat = "New" name = "새싹" value = {New} fc = {statusCheck} />
          <InputStatus stat = "RNew" name = "복귀" value = {RNew} fc = {statusCheck} />
          <InputStatus stat = "MPVE" name = "전투 멘토" value = {MPVE} fc = {statusCheck} />
          <InputStatus stat = "MPRP" name = "제작/채집 멘토" value = {MPRP} fc = {statusCheck} />
          <InputStatus stat = "MPVP" name = "PVP 멘토" value = {MPVP} fc = {statusCheck} />
        </div>
        <div className = "InputLevel">{/* Level Input Field */}
          <div className = "Group">{/* Tank / Healer */}
            <InputJob name = "PLD" job = "lvPLD" value = {lvPLD} fc = {changeLv} type = "Tank" />
            <InputJob name = "WAR" job = "lvWAR" value = {lvWAR} fc = {changeLv} type = "Tank" />
            <InputJob name = "DRK" job = "lvDRK" value = {lvDRK} fc = {changeLv} type = "Tank" />
            <InputJob name = "GNB" job = "lvGNB" value = {lvGNB} fc = {changeLv} type = "Tank" />
            <InputJob name = "WHM" job = "lvWHM" value = {lvWHM} fc = {changeLv} type = "Healer" />
            <InputJob name = "SCH" job = "lvSCH" value = {lvSCH} fc = {changeLv} type = "Healer" />
            <InputJob name = "AST" job = "lvAST" value = {lvAST} fc = {changeLv} type = "Healer" />
            <InputJob name = "SGE" job = "lvSGE" value = {lvSGE} fc = {changeLv} type = "Healer" />
          </div>
          <div className = "Group">{/* DPS Melee */}
            <InputJob name = "MNK" job = "lvMNK" value = {lvMNK} fc = {changeLv} type = "DPS" />
            <InputJob name = "DRG" job = "lvDRG" value = {lvDRG} fc = {changeLv} type = "DPS" />
            <InputJob name = "NIN" job = "lvNIN" value = {lvNIN} fc = {changeLv} type = "DPS" />
            <InputJob name = "SAM" job = "lvSAM" value = {lvSAM} fc = {changeLv} type = "DPS" />
            <InputJob name = "RPR" job = "lvRPR" value = {lvRPR} fc = {changeLv} type = "DPS" />
          </div>
          <div className = "Group">{/* DPS RP / DPS RM */}
            <InputJob name = "BRD" job = "lvBRD" value = {lvBRD} fc = {changeLv} type = "DPS" />
            <InputJob name = "MCH" job = "lvMCH" value = {lvMCH} fc = {changeLv} type = "DPS" />
            <InputJob name = "DNC" job = "lvDNC" value = {lvDNC} fc = {changeLv} type = "DPS" />
            <InputJob name = "BLM" job = "lvBLM" value = {lvBLM} fc = {changeLv} type = "DPS" />
            <InputJob name = "SMN" job = "lvSMN" value = {lvSMN} fc = {changeLv} type = "DPS" />
            <InputJob name = "RDM" job = "lvRDM" value = {lvRDM} fc = {changeLv} type = "DPS" />
          </div>
          <div className = "Group">{/* DOH */}
            <InputJob name = "CRP" job = "lvCRP" value = {lvCRP} fc = {changeLv} type = "DOH" />
            <InputJob name = "BSM" job = "lvBSM" value = {lvBSM} fc = {changeLv} type = "DOH" />
            <InputJob name = "ARM" job = "lvARM" value = {lvARM} fc = {changeLv} type = "DOH" />
            <InputJob name = "GSM" job = "lvGSM" value = {lvGSM} fc = {changeLv} type = "DOH" />
            <InputJob name = "LTW" job = "lvLTW" value = {lvLTW} fc = {changeLv} type = "DOH" />
            <InputJob name = "WVR" job = "lvWVR" value = {lvWVR} fc = {changeLv} type = "DOH" />
            <InputJob name = "ALC" job = "lvALC" value = {lvALC} fc = {changeLv} type = "DOH" />
            <InputJob name = "CUL" job = "lvCUL" value = {lvCUL} fc = {changeLv} type = "DOH" />
          </div>
          <div className = "Group">{/* DOL */}
            <InputJob name = "MIN" job = "lvMIN" value = {lvMIN} fc = {changeLv} type = "DOL" />
            <InputJob name = "BTN" job = "lvBTN" value = {lvBTN} fc = {changeLv} type = "DOL" />
            <InputJob name = "FSH" job = "lvFSH" value = {lvFSH} fc = {changeLv} type = "DOL" />
          </div>
          <div className = "Group">{/* Special */}
            <InputJob name = "BLU" job = "lvBLU" value = {lvBLU} fc = {changeLv} type = "SPC" />
            <InputJob name = "ELE" job = "lvELE" value = {lvELE} fc = {changeLv} type = "SPC" />
            <InputJob name = "RES" job = "lvRES" value = {lvRES} fc = {changeLv} type = "SPC" />
          </div>
        </div>
        <div className = "InputType">{/* Type Select Radio Field */}
          <InputType type = "Type1" index = "1" select = {index} fc = {selectIndex} />
          <InputType type = "Type2" index = "2" select = {index} fc = {selectIndex} wip = "(제작중)" />
        </div>
        <div className = "ButtonField">{/* Up/Download Button */}
          <FileUpload label = "사진 업로드" onChange = {onImageChange} 
            comment = "현재 캐릭터가 중간에 나온 16:9 비율의 사진만 지원합니다."/>
          {/* <FileDownload label = "PNG 파일로 저장" comment = "" docTarget = {document.getElementsByClassName("Result")[0]}/> */}
          {/* <button onClick = {showPreview}>변경 적용하기</button> */}
          <button onClick = {saveAsPNG}>PNG 파일로 저장</button>
        </div>
      </div>
      {/* <div id = "PreviewUser">
        <img id = "PI" src = {BG_None} alt = "예시 이미지" />
      </div> */}
      <div id = "R" className = "PreviewDisplay">
        <div className = "ImageInput">
          {urlImage ? (
            <img className = "ImgInput" src = {urlImage} alt = "urlImage" />
          ) : ( 
            <img className = "ImgNone" src = {BG_None} alt = "예시 이미지" />
          )}
        </div>
        <div className = "ImageBackground">
          <LoaderBG index = {index} />
        </div>
        <div className = "DisplayContent">
          <div className = "PlayerInfo">
            <LoaderText name = "Name" i = {index} t = {Name} />
            <LoaderText name = "Title" i = {index} t = {Title} />
            <LoaderText name = "FC" i = {index} t = {FC} />
            <LoaderText name = "FCs" i = {index} t = {FCs} />
            <LoaderText name = "Server" i = {index} t = {Server} />
          </div>
          <div className = "PlayerDesc">
            <LoaderText name = "Style" i = {index} t = {Style} />
            <LoaderText name = "Like" i = {index} t = {Like} />
            <LoaderText name = "Dislike" i = {index} t = {Dislike} />
            <LoaderText name = "Desc" i = {index} t = {Desc} />
          </div>
          <div className = "PlayerStatus">
            <LoaderStatus stat = "New" i = {index} src = {INew} c = {New} />
            <LoaderStatus stat = "RNew" i = {index} src = {IRNew} c = {RNew} />
            <LoaderStatus stat = "MPVE" i = {index} src = {IMPVE} c = {MPVE} />
            <LoaderStatus stat = "MPRP" i = {index} src = {IMPRP} c = {MPRP} />
            <LoaderStatus stat = "MPVP" i = {index} src = {IMPVP} c = {MPVP} />
          </div>
          <div className = "Tank">
            <LoaderIcon job = "PLD" i = {index} j = "Tank" lv = {lvPLD} />
            <LoaderIcon job = "WAR" i = {index} j = "Tank" lv = {lvWAR} />
            <LoaderIcon job = "DRK" i = {index} j = "Tank" lv = {lvDRK} />
            <LoaderIcon job = "GNB" i = {index} j = "Tank" lv = {lvGNB} />
          </div>
          <div className = "Healer">
            <LoaderIcon job = "WHM" i = {index} j = "Healer" lv = {lvWHM} />
            <LoaderIcon job = "SCH" i = {index} j = "Healer" lv = {lvSCH} />
            <LoaderIcon job = "AST" i = {index} j = "Healer" lv = {lvAST} />
            <LoaderIcon job = "SGE" i = {index} j = "Healer" lv = {lvSGE} />
          </div>
          <div className = "DpsM">
            <LoaderIcon job = "DRG" i = {index} j = "Dps" lv = {lvDRG} />
            <LoaderIcon job = "MNK" i = {index} j = "Dps" lv = {lvMNK} />
            <LoaderIcon job = "NIN" i = {index} j = "Dps" lv = {lvNIN} />
            <LoaderIcon job = "RPR" i = {index} j = "Dps" lv = {lvRPR} />
            <LoaderIcon job = "SAM" i = {index} j = "Dps" lv = {lvSAM} />
          </div>
          <div className = "DpsRP">
            <LoaderIcon job = "BRD" i = {index} j = "Dps" lv = {lvBRD} />
            <LoaderIcon job = "MCH" i = {index} j = "Dps" lv = {lvMCH} />
            <LoaderIcon job = "DNC" i = {index} j = "Dps" lv = {lvDNC} />
          </div>
          <div className = "DpsRM">
            <LoaderIcon job = "BLM" i = {index} j = "Dps" lv = {lvBLM} />
            <LoaderIcon job = "SMN" i = {index} j = "Dps" lv = {lvSMN} />
            <LoaderIcon job = "RDM" i = {index} j = "Dps" lv = {lvRDM} />
          </div>
          <div className = "DOH">
            <LoaderIcon job = "CRP" i = {index} j = "DOH" lv = {lvCRP} />
            <LoaderIcon job = "BSM" i = {index} j = "DOH" lv = {lvBSM} />
            <LoaderIcon job = "ARM" i = {index} j = "DOH" lv = {lvARM} />
            <LoaderIcon job = "GSM" i = {index} j = "DOH" lv = {lvGSM} />
            <LoaderIcon job = "LTW" i = {index} j = "DOH" lv = {lvLTW} />
            <LoaderIcon job = "WVR" i = {index} j = "DOH" lv = {lvWVR} />
            <LoaderIcon job = "ALC" i = {index} j = "DOH" lv = {lvALC} />
            <LoaderIcon job = "CUL" i = {index} j = "DOH" lv = {lvCUL} />
          </div>
          <div className = "DOL">
            <LoaderIcon job = "MIN" i = {index} j = "DOL" lv = {lvMIN} />
            <LoaderIcon job = "BTN" i = {index} j = "DOL" lv = {lvBTN} />
            <LoaderIcon job = "FSH" i = {index} j = "DOL" lv = {lvFSH} />
          </div>
          <div className = "Special">
            <LoaderIcon job = "BLU" i = {index} j = "Special" lv = {lvBLU} />
            <LoaderIcon job = "ELE" i = {index} j = "Special" lv = {lvELE} />
            <LoaderIcon job = "RES" i = {index} j = "Special" lv = {lvRES} />
          </div>
        </div>
      </div>
      <div>
        <SheetFooter />
      </div>
    </div>
  );
}

export default Sheet;