var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dias = parseInt(lines.shift());

function conversorTempoDias(dias) {

    let anos = parseInt(dias / 365);
    dias = dias - (anos * 365);

    let meses = parseInt(dias / 30);
    dias = dias - (meses * 30)

    return {
        dias: dias,
        meses: meses,
        anos: anos
    }
}


let tempoConvertido = conversorTempoDias(dias)

console.log(tempoConvertido.anos + " ano(s)");
console.log(tempoConvertido.meses + " mes(es)");
console.log(tempoConvertido.dias + " dia(s)");