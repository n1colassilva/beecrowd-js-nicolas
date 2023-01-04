var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const nomeFuncionario = lines.shift();
const salario = parseFloat(lines.shift());
const vendas = parseFloat(lines.shift());

const comissao = vendas * 0.15

const pagamentoTotal = salario + comissao;

console.log("TOTAL = R$ " + pagamentoTotal.toFixed(2));