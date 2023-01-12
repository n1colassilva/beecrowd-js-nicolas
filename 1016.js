var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const distanciaX = parseInt(lines.shift());

const tempoY = (60 * distanciaX) / 30;

console.log(tempoY + " minutos");