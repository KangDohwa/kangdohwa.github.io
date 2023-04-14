import jsonItems from "../csv/items.json";

function TranslateItems(name) {
  for (let i = 0; i <= jsonItems.length; i++) {
    if (jsonItems[i].Eng === name) {
      return jsonItems[i].Kor;
    };
  };
};

export default TranslateItems;