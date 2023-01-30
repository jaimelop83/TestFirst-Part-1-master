/* eslint-disable no-unused-vars */

function repeat(str, num) {
  let output = '';
  for (i = 0; i < num; i++) output += str;
  return output;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

function join(arr, delim = '') {
  let output = '';
  for (const str of arr) output += str + delim; //Iterable loop, for (const itItem of it) {}
  return output.slice(0, output.length - delim.length);
}
/*
function gridGenerator(num) {
  let board = '';
  for (let lineIdx =0; lineIdx < num; lineIdx++) {
    for (let charIdx = 0; charIdx < num; charIdx++)
      if ((lineIdx + char Idx) %2 === 0) board += '#';
      else board += ' ';
    board += '\n';
  }

  return board;
}
*/

function gridGenerator(num) {
  let grid = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      //add a '#' symbol of ' ' to the grid
      //we are skipping every other, so it's an odd pattern, so have to do 'mod' 2 aka %2
      if ((i + j) % 2 === 0) {
        //if mod 2 equals 0, then it is an even number
        grid += '#'; //we want the evens to be the '#' symbol
      } else {
        grid += ' ';
      }
    }
    grid += '\n';
  }
  return grid;
}

const paramify = (obj) => {
  let retVal = []; //Make this an array by using []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      retVal.push(`${key}=${obj[key]}`);
    }
  }
  return retVal.sort().join('&');
};
