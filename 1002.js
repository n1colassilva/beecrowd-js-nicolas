var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const r = parseFloat(lines.shift());
const area = (3.14159 * Math.pow(r, 2)).toFixed(4);

console.log("A=" + area);