import React from "react";

import Board from "./Board";

// function setRandomMine(field, storage, mine) {
//   var i = 0;
//   do {
//     i += 1;
//     storage[i] = 0;
//   } while (i < storage);
//   var j = 0;
//   do {
//     j += 1;
//     storage[j] = 1;
//   } while (j < mine)
//   storage.sort(() => Math.random() - 0.5);
//   console.log(storage);

//   var k = 0;
//   do {
//     k =+ 1;
//     field[k] = 1;
//   } while (k < mine);
// };

// function printMineField() {

// };

export default function Minesweeper(props) {
  const [row, col, num] = [10, 8, 4];

  // const testArr = [10, 8, 20];

  // const row = parseInt(document.getElementById("row").value);
  // const col = parseInt(document.getElementById("col").value);

  // function setField(row, col) {
  //   123
  // }
  // var setMine = [testArr[0], testArr[1],];
  // var setField = new Array(testArr[0] * testArr[1]);

  // var setField = [props.Row, props.Col,];
  // var setMine = new Array(props.amount);

  // const resultMine = setRandomMine(setField, setMine, testArr[2]);
  // const gridBase = Array(row * col).fill(0).map((arr, i) => {
  //   return i
  // });

  // .sort(() => Math.random() - 0.5) // array randomize

  return (
    <div className = "mine-board">
      <Board row = {row} col = {col}/>
    </div>
  )
}