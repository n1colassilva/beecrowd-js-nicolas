var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let segundos = parseInt(lines.shift());

function conversorTempoSegundo(segundos) {
    let minutos = parseInt(segundos / 60);
    segundos = segundos - (minutos * 60);

    let horas = parseInt(minutos / 60);
    minutos = minutos - (horas * 60);

    return {
        s: segundos,
        m: minutos,
        h: horas
    }
}

let tempoConvertido = conversorTempoSegundo(segundos)

console.log(tempoConvertido.h + ":" + tempoConvertido.m + ":" + tempoConvertido.s);