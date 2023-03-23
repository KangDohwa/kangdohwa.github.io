import React, { useState, useCallback, useRef, createRef,
  //  useEffect
   } from "react";
import FileInput from "./FileInput";

import domtoimage from "dom-to-image";

import imgPreviewPre from "./images/Preview_Pre.png";
import imgBackground from "./images/bg_v3.png";

import "./Core.scss";

import SaveImage from "./SaveImage";
import FileSaver from "file-saver";

import { toBlob } from 'html-to-image';

function drawImageToCanvas({ srcImage }) {
  const imgSrc = document.createElement("img");
  imgSrc.src = {srcImage};
}

function downloadDivAsPng() {
  domtoimage.toBlob(document.getElementsByClassName("preview-final")[0])
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

  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      console.log(ref)
      return
    }

    toBlob(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "test-image.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  })
  
  return (
    <div className = "container">
      {/* <input type = "file" onChange = {(e) => {
        encodeFileToBase64(e.target.files[0]);
      }} />
      <div className = "preview-final">
        {imageSrc && <img className = "img-preview" src = {imageSrc} alt = "preview-img" />}
        <img className = "img-Background" src = {imgBackground} alt = "BG" />
      </div>
      <button onClick = {downloadDivAsPng}>다운로드</button> */}
      <div className = "preview">
        <FileInput label = "사진 업로드" onChange = {onImageChange} comment = "Only support 16:9 image"/>
        <div>
          <button onClick = {onButtonClick}>사진 저장 bc</button>
        </div>
      </div>
      <button onClick = {downloadDivAsPng}>다운로드 dap</button>
      <div className = "box">
        <div className = "preview-final">
          {urlImage ? (
            <img className = "img-preview" src = {urlImage} alt = "urlImage" />
          ) : ( 
            // "이미지 미리보기"
            <img className = "img-preview-pre" src = {imgPreviewPre} alt = "예시 이미지" />
          )}
          <img className = "img-Background" src = {imgBackground} alt = "BG" />
        </div>
        <canvas id = "final-canvas" width={1350} height={1080} />
      </div>
    </div>
  );
}

export default MyPage;