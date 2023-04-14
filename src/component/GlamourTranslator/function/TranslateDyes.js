import jsonDyes from "../csv/dyes.json";

function TranslateDyes(name) {
  for (let i = 0; i <= jsonDyes.length; i++) {
    if (jsonDyes[i].Eng === name) {
      return jsonDyes[i].Kor;
    };
  };
};

export default TranslateDyes;