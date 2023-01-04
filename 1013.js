var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada = lines.shift().split(" ");

const A = parseInt(entrada[0]);
const B = parseInt(entrada[1]);
const C = parseInt(entrada[2]);

function maior(a, b) {
    return (a + b + Math.abs(a - b)) / 2;
}

const maiorAB = maior(A, B);
const maiorBC = maior(B, C);
const maiorABC = maior(maiorAB, maiorBC);

console.log(maiorABC + " eh o maior");