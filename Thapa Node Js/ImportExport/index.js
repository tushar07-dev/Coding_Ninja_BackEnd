// *     for only one varible / function export
// const add = require('./oper');
// console.log(add(2,3));

// *     for more than one varible / function export

// const oper = require('./oper');
// console.log(oper.add(2,3));
// console.log(oper.substract(10, 8));
// console.log(oper.name);
// console.log(oper);


const {add , substract, name } = require('./oper');

console.log(add(2,3));
console.log(substract(10, 8));
console.log(name);
