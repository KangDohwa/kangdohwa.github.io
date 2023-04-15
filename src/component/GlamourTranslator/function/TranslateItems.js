import jsonItems from "../csv/items.json";

function TranslateItems(name) {
  for (let i = 0; i <= jsonItems.length; i++) {
    if (jsonItems[i].Eng === name) {
      const _name = (jsonItems[i].Kor === "") ? `${jsonItems[i].Eng} (${jsonItems[i].Ver ? jsonItems[i].Ver : "No Info"})` : jsonItems[i].Kor;
      return _name;
    };
  };
};

export default TranslateItems;