import React from "react";

function fillArray(array, number, data) {
  var i = 0;

  do {
    i += 1;
    array.push(data);
  } while (i < number);

  return array;
};

function d2array(varrow, varcol, data) {
  const baseArray = [];
  for(let i = 0; i < varcol; i++) {
    const cells = [];
    for(let j = 0; j < varrow; j++) {
      cells.push(data[i*5+j]);
    }
    baseArray.push(cells);
  };
  return baseArray;
};

function Board(props) {
  const Base = Array(props.row * props.col).fill(0);

  const BaseCol = Array();
  const BaseRow = Array();

  fillArray(BaseCol, props.col, 0);
  fillArray(BaseRow, props.row, 0);

  // making random mine array
  const randBase = Array(props.row * props.col).fill(0);

  var intI = 0;
  do {
    intI += 1;
    randBase.shift();
    randBase.push(1);
  } while (intI < props.num)
  
  randBase.sort(() => 0.5 - Math.random());

  
  const baseArray = d2array(props.row, props.col, randBase);

  // compare two array
  console.log(`${randBase} RandBase`);
  console.log(`${baseArray} BaseArray`);

  // end of making random mine array

  return (
    <>
      <div className = "Mine-Board">
        {BaseCol.map((arr, i) => {
          <div key = {i}>
            {BaseRow.map((arr, j) => {
              return (
                <button>{baseArray[i[j]]}</button>
              )
            })}
          </div>
        })}
        {randBase}
      </div>
    </>
  )
}

export default Board;