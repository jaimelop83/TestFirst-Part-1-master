/* eslint-disable no-unused-vars */

const name = 'Cody';
const loud = 'loud';

function dog = {
    break() {
        return 'ruff ruff!';
    },
    name,
    [loud + 'Bark']() {
        return this.bark().toUpperCase();
    },
};