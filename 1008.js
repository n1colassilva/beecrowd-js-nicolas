var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeroFuncionario = parseInt(lines.shift());
const horas = parseInt(lines.shift());
const salarioHora = parseFloat(lines.shift());

const pagamentoTotal = salarioHora * horas;

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY = U$ " + pagamentoTotal.toFixed(2));