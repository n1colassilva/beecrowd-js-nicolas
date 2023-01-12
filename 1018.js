var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
console.log(valor)

function calculaNota(valorFunc, notaTipo) {
    let notaQuantidade = parseInt(valorFunc / notaTipo);
    let valorAtualizado = valorFunc - (notaQuantidade * notaTipo)
    //imprime o resultado

    console.log(notaQuantidade + " nota(s) de R$ " + notaTipo + ",00")

    //retorna novo valor a ser processado pelas notas menores
    return valorAtualizado
}

// Lista dos tipo de notas para ser usado pelo loop
const notas = [100, 50, 20, 10, 5, 2, 1];

for (const nota of [100, 50, 20, 10, 5, 2, 1]) {
    valor = calculaNota(valor, nota)
}