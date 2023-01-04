var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calculoPreco(linhaEntrada) {
    const dados = linhaEntrada.split(" ");

    // const codigoProduto = dados[0] inutil para a operação
    const quantidadeProduto = parseInt(dados[1]);
    const precoUnidade = parseFloat(dados[2]);

    const valorPagamento = precoUnidade * quantidadeProduto;

    return valorPagamento;
}

const totalPagamento = parseFloat(calculoPreco(lines.shift())) + parseFloat(calculoPreco(lines.shift()));

console.log("VALOR A PAGAR: R$ " + totalPagamento.toFixed(2))