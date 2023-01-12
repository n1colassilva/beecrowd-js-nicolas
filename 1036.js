var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada = lines.shift().split(" ");

const A = parseFloat(entrada[0]);
const B = parseFloat(entrada[1]);
const C = parseFloat(entrada[2]);

const Δ = Math.pow(B, 2) - ((4 * A) * C);

if (A === 0.0 || B === 0.0 || Δ <= 0) {

    console.log("Impossivel calcular")

} else {
    // Bhaskara
    // +
    const R1 = ((B * -1) + Math.sqrt(Δ)) / (2 * A)
    // -
    const R2 = ((B * -1) - Math.sqrt(Δ)) / (2 * A)

    console.log("R1 = " + R1.toFixed(5))
    console.log("R2 = " + R2.toFixed(5))
}