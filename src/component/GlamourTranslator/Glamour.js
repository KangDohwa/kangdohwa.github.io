import React from "react";
import * as cheerio from "cheerio";

import GetHtml from "./function/GetHtml";

function Glamour() {
  async function doGlamour() {
    const _addr = document.getElementById("Glamour-Address").value;
    const _data = await GetHtml(_addr);
    const $ = cheerio.load(_data.data);

    let _arr = [];

    for (let cat = 0; cat <= 10; cat++) {
      for (let i = 1; i <= 5; i++) {
        const $items = $(`#js-app > div > section.l-section.l-section-double > section > section > div:nth-child(${cat}) > div:nth-child(${i})`);
        $items.each((idx, node) => {
          const name = $(node).find(".c-gear-slot-item a span").text();

          if (name === "") {
            return;
          }
          
          _arr.push({
            // category: cat,
            // index: i,
            name: name,
          });
        });
      }
    }

    console.log(_arr);
  }
  
  return (
    <>
    <div className = "Glamour">
      <input id = "Glamour-Address" type = "text" placeholder = "number" required />
      <button onClick = {doGlamour}>Search</button>
    </div>
    </>
  )
}

export default Glamour;

// #js-app > div > section.l-section.l-section-double > section > section > div:nth-child(3) > div:nth-child(1)