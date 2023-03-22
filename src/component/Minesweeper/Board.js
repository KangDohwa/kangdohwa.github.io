import React from "react";

// what we need for minesweeper
// state - position, key, value(bomb or not), 
// timer
// start, reset button

function MakeButton(props) {
  return (
    <button 
      className = "MineButton"
      onClick = {props.onClick}
    >
      {props.value}
    </button>
  )
}

function MakeBoard(props) {
  var index = 0; // button key

  const renderRow = (i, numcol) => {
    const linerow = [];
    for (let numrow = 0; numrow < props.row; numrow++) {
      linerow.push(<MakeButton value = {props.value} onClick = {() => props.onClick(i)} key = {index} />)
      index += 1;
    }
    console.log(linerow)
    return linerow;
  }

  const renderCol = (i) => {
    const linecol = [];
    for (let numcol = 0; numcol < props.col; numcol++) {
      linecol.push(
        <div className = "line-col" key = {i}>{renderRow(i, numcol)}</div>
      )
    }
    return linecol;
  }

  return (
    <div className = "ms-board-line">
      {renderCol()}
    </div>
  )
}

function MineBoard(props) {
  
  const handleClick = (i, key) => {
    return (
      console.log(this.key)
    )
  }

  return (
    <div className = "minesweeper-board">
      <MakeBoard 
        row = {props.row}
        col = {props.col}
        value = {4}
        onClick = {(i) => handleClick(i)}
      />
    </div>
  )
}

// class MineBoard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posx: 0,
//       posy: 0,
//       row: 8,
//       col: 4,
//       key: 0,
//       value: 0
//     };
//   }

//   render() {
//     const row = this.state.row;
//     const col = this.state.col;
//     return (
//       <div className = "minesweeper-board">
//         <MakeBoard
//           row = {row}
//           col = {col}
//           value = {4}
//         />
//       </div>
//     )
//   }
// }

export default MineBoard;













// function fillArray(array, number, data) {
//   var i = 0;

//   do {
//     i += 1;
//     array.push(data);
//   } while (i < number);

//   return array;
// };

// function d2array(varrow, varcol, data) {
//   const baseArray = [];
//   for(let i = 0; i < varcol; i++) {
//     const cells = [];
//     for(let j = 0; j < varrow; j++) {
//       cells.push(data[i*5+j]);
//     }
//     baseArray.push(cells);
//   };
//   return baseArray;
// };

// function Board(props) {
//   const Base = Array(props.row * props.col).fill(0);

//   const BaseCol = Array();
//   const BaseRow = Array();

//   fillArray(BaseCol, props.col, 0);
//   fillArray(BaseRow, props.row, 0);

//   // making random mine array
//   const randBase = Array(props.row * props.col).fill(0);

//   var intI = 0;
//   do {
//     intI += 1;
//     randBase.shift();
//     randBase.push(1);
//   } while (intI < props.numrow)
  
//   randBase.sort(() => 0.5 - Math.random());

  
//   const baseArray = d2array(props.row, props.col, randBase);

//   // compare two array
//   console.log(`${randBase} RandBase`);
//   console.log(`${baseArray} BaseArray`);

//   // end of making random mine array

//   return (
//     <div className = "Mine-Board">
//       {BaseCol.map((arr, i) => {
//         <div key = {i}>
//           {BaseRow.map((arr, j) => {
//             return (
//               <button>{baseArray[i[j]]}</button>
//             )
//           })}
//         </div>
//       })}
//       {randBase}
//     </div>
//   )
// }

// export default MineBoard;