import jsonItems from "../csv/items.json";
import GetVersion from "../function/GetVersion";
import * as cheerio from "cheerio";

export default async function DoSome() {
  var _array = [];
  try {
    for (let i = 0; i <= jsonItems.length; i++) {
      var _itemEng = jsonItems[i].Eng;
      var _itemKor = jsonItems[i].Kor;
      var _itemVer = "Obsolete Item";

      if (jsonItems[i].Ver !== "") {
        console.log(`No.${i} Already Done`);
        _array.push({"Eng": _itemEng, "Kor": _itemKor, "Ver": jsonItems[i].Ver});
        continue;
      }

      if (jsonItems[i].Eng === "" && jsonItems[i].Kor !== "") {
        console.log(`No.${i} is Kor Only Item. Skipped.`);
        _array.push({"Eng": _itemEng, "Kor": _itemKor, "Ver": "Only Kor Item"});
        continue;
      }

      if (jsonItems[i].Eng === "" && jsonItems[i].Kor === "") {
        console.log(`No.${i} is empty line. Skipped.`);
        _array.push({"Eng": "", "Kor": "", "Ver": ""});
        continue;
      }

      const _itemEng_r = _itemEng.replace(/ #/g, "_")
        .replace(/ /g, "_")
        .replace(/'/g, "%27")
        .replace(/\+/g, "%2B")
        .replace(/\[/g, "(")
        .replace(/\]/g, ")")
        .replace(/\?/g, "");
      const _data = await GetVersion(_itemEng_r);
      const $ = cheerio.load(_data.data);

      const _version = $(`#mw-content-text > div > table.itembox.shadowed > tbody > tr:nth-child(1) > td:nth-child(2) > div:nth-child(3) > sup > a`).text();

      if (_version !== "") {
        _itemVer = _version;
      }
      
      _array.push({"Eng": _itemEng, "Kor": _itemKor, "Ver": _itemVer});

      console.log(`No.${i} Done for ${_itemEng}, Version is ${_version}`);

      if (i % 100 === 0) {
        console.log(_array);
      }
    }

    console.log(_array);
  } catch (e) {
    console.log("Error!", _array);
  }
}