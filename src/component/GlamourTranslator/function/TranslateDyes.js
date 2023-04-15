import jsonDyes from "../csv/dyes.json";

function TranslateDyes(name) {
  for (let i = 0; i <= jsonDyes.length; i++) {
    if (name === undefined) {
      return {Dye: "염색 불가", Code: "#505050"};
    } else if (jsonDyes[i].Eng === name) {
      return {Dye: jsonDyes[i].Kor, Code: jsonDyes[i].Code};
    };
  };
};

export default TranslateDyes;