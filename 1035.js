var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada = lines.shift().split(" ");

const A = parseInt(entrada[0]);
const B = parseInt(entrada[1]);
const C = parseInt(entrada[2]);
const D = parseInt(entrada[3]);

// B>C
// D>A
// C+D>A+B
// C e D positivo
// A é par

function entradaNaoAceita() {
    console.log("Valores nao aceitos");
}


if (B <= C) {

    entradaNaoAceita();

} else if (D <= A) {

    entradaNaoAceita();

} else if ((C + D) <= (A + B)) {

    entradaNaoAceita();

} else if (C <= 0) {

    entradaNaoAceita();

} else if (D <= 0) {

    entradaNaoAceita();

} else if (A % 2 !== 0) {

    entradaNaoAceita();

} else {

    console.log("Valores aceitos");

}