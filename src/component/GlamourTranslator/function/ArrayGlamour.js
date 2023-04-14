import * as cheerio from "cheerio";

import GetHtml from "../function/GetHtml";
import TranslateItems from "../function/TranslateItems";
import TranslateDyes from "../function/TranslateDyes";

export function GetValue() {
  return document.getElementById("Glamour-Address").value;
};

async function ArrayGlamour() {
  const _data = await GetHtml(GetValue());
  const $ = cheerio.load(_data.data);

  var _arr = [];
  var _idx = 0;

  for (let cat = 0; cat <= 10; cat++) {
    for (let i = 1; i <= 5; i++) {
      const $items = $(`#js-app > div > section.l-section.l-section-double > section > section > div:nth-child(${cat}) > div:nth-child(${i})`);
      // below for remove alert
      // eslint-disable-next-line no-loop-func
      $items.each((idx, node) => {
        const item = $(node).find(".c-gear-slot-item a span").text();
        const dye = $(node).find(".c-gear-slot-item div span").text().replace(/\n| {8}/g, "").split(/⬤ |◯ /);
        
        if (item === "") {
          return;
        }

        const _item = TranslateItems(item);
        const _dye = TranslateDyes(dye[1]);

        _arr.push({
          id: _idx,
          item: _item,
          dye: _dye,
        });

        _idx++;
      });
    }
  }

  console.log("Completed", _arr);
  return _arr;
}

export default ArrayGlamour;