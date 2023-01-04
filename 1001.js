var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1 = parseInt(lines.shift());
let num2 = parseInt(lines.shift());

let resultado = parseInt(num1) + parseInt(num2);

console.log("X = " + resultado);