/* eslint-disable no-unused-vars */

const createCalculator = () => ({
  total: 0,
  add(num) {
    this.total += num;
  },
  substract(num) {
    this.total -= num;
  },
  clear() {
    this.total = 0;
  },
});
