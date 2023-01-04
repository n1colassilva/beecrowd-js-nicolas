var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entradaUm = lines.shift().split(" ");
const entradaDois = lines.shift().split(" ");

const pontoA = {

    x: parseFloat(entradaUm[0]),
    y: parseFloat(entradaUm[1])
};

const pontoB = {
    x: parseFloat(entradaDois[0]),
    y: parseFloat(entradaDois[1])
};

const distancia = Math.sqrt(
    Math.pow((pontoA.x - pontoB.x), 2) + Math.pow((pontoA.y - pontoB.y), 2)
);

console.log(distancia.toFixed(4))