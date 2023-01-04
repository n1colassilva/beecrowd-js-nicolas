var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const R = parseFloat(lines.shift());

const pi = 3.14159;

const VOLUME = (4 / 3.0) * pi * Math.pow(R, 3);

console.log("VOLUME = " + VOLUME.toFixed(3));