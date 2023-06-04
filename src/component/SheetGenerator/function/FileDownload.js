import { toPng } from "html-to-image";
// import FileSaver from "file-saver";

export default function testT() {
  var node = document.getElementById("R");
  toPng(node, { cacheBust: true, })
    .then(function (dataUrl) {
      const link = document.createElement("a")
      link.download = "트친소 - " + new Date().toLocaleTimeString()
      link.href = dataUrl
      link.click()
      // var img = new Image();
      // img.src = dataUrl;
      // document.body.appendChild(img);
    })
    .catch(function (err) {
      console.error("oops, wrong", err);
    });

  // toPng(document.getElementById("R"))
  //   .then(function (blob) {
  //     if (window.saveAs) {
  //       window.saveAs(blob, "트친소 - " + new Date().toLocaleTimeString());
  //     } else {
  //       FileSaver.saveAs(blob, "트친소 - " + new Date().toLocaleTimeString());
  //     }
  //   });
};