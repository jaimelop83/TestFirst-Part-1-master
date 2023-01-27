/* eslint-disable no-unused-vars */

const setPropsOnObj = (obj) => {
  obj.x = 7;
  obj.y = 8;
  //Set Property of obj 'onePlus' to a function that adds 1 to its argument.
  obj.onePlus = (num) => num + 1;
};

const setPropsOnArr = (arr) => {
  arr.hello = () => 'Hello!';
  arr.full = 'stack';
  arr[0] = 5;
  arr.twoTimes = (num) => num * 2;
};

const setPropsOnFunc = (func) => {
  func.year = '20??';
  func.divideByTwo = (num) => num / 2;
};

const shallowCopy = (arg1, arg2) => {
  //Note that '...' is simply expanding the array
  if (Array.isArray(arg1) && Array.isArray(arg2)) return [...arg1, ...arg2];
  return { ...arg1, ...arg2 };
};
