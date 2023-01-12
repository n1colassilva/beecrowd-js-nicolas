    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

let valor = lines.shift();

function calculaNota(valorNotas, notaTipo) {

    let notaQuantidade = parseInt(valorNotas / notaTipo);
    let valorAtualizado = valorNotas - (notaQuantidade * notaTipo);
    if (notaTipo > 1) {

        console.log(parseInt(notaQuantidade) + " nota(s) de R$ " + notaTipo.toFixed(0) + ".00");

    } else if (notaTipo <= 1.00) {

        console.log(parseInt(notaQuantidade) + " moeda(s) de R$ " + notaTipo.toFixed(2));

    }
    return valorAtualizado
}

// Lista dos tipo de notas para ser usado pelo loop
// const notas = [100, 50, 20, 10, 5, 2, 1];
console.log("NOTAS:")
for (const nota of [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]) {
    valor = calculaNota(valor, nota);
}

console.log("MOEDAS:")
for (const nota of [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]) {
    valor = calculaNota(valor, nota);
}

// O beecrowd por algum motivo diz "Wrong answer (0%)", significando que ele acha que está errado, passou todos os testes, mas está errado, não consigo identificar o ques está errado e como obviamente eu sou um mestre da programação, o problema não é no meu codigo, mas sim no beecrowd