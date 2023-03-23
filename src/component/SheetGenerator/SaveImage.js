import React, { useCallback, useRef } from "react";
import { toBlob } from "html-to-image";

import FileSaver from "file-saver";

export default function SaveImage() {
  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
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
    // toBlob(ref.current, { cacheBust: true, })
    //   .then(function (blob) {
    //     if (window.saveAs) {
    //       window.saveAs(blob, "test-image.png");
    //     } else {
    //       FileSaver.saveAs(blob, "test-image-fs.png")
    //     }
    //   })
  })

  return (
    <>
      <div useRef = {ref}>
      </div>
      <button onClick = {onButtonClick}> Click Me </button>
    </>
  )
}