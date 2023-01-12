var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tempo = parseInt(lines.shift());
const velocidade = parseInt(lines.shift());

const distancia = tempo * velocidade;

const combustivel = distancia / 12;

console.log(combustivel.toFixed(3))