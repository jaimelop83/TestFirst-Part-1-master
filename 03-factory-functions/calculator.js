/* eslint-disable no-unused-vars */

const createCalculator = () => ({
  total: 0,
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  clear() {
    this.total = 0;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = 0;
  },
});

function addSquareMethod(arrOfCalc) {
  arrOfCalc.forEach((calc) => {
    calc.square = function () {
      return this.total * this.total;
    };
  });

  return arrOfCalc;
}

const prototype = {
  total: 0,
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  clear() {
    this.total = 0;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  let instance = Object.create(prototype);
  instance.total = -10;
  return instance;
}
