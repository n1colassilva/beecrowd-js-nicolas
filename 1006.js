var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift()).toFixed(1);
const B = parseFloat(lines.shift()).toFixed(1);
const C = parseFloat(lines.shift()).toFixed(1);

const MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));