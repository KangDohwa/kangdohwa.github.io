import { useRef } from "react";
import DomToImage from "dom-to-image";

export default function FileDownload({ label, onChange, comment, docTarget }) {
  const ref = useRef(null);

  const onClick = () => {
    ref.current?.click();
  };

  const DownloadDivAsPng = () => {
    const fileName = "트친소 - " + new Date().toLocaleTimeString()
    DomToImage.toBlob(docTarget)
      .then(function (blob) {
        window.saveAs(blob, fileName)
    });;
  };

  return (
    <>
    <button onClick = {DownloadDivAsPng}>
      {label}
    </button>
    </>
  )
}