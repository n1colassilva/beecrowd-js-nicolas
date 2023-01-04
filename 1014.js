var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const distancia = parseFloat(lines.shift());
const gasolina = parseFloat(lines.shift());

const consumo = distancia / gasolina;

console.log(consumo.toFixed(3) + " km/l")