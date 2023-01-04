var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada = lines.shift().split(" ");

const A = parseFloat(entrada[0]);
const B = parseFloat(entrada[1]);
const C = parseFloat(entrada[2]);

// Área de triângulo

const areaTriangulo = (A * C) / 2;

// Área do raio de circulo C

const areaCirculo = 3.14159 * (C * C);

// Área do trapézio base A B e altura c

const areaTrapezio = (C * (A + B)) / 2;

// Área de quadrado de lado B

const areaQuadrado = B * B;

// Área de retângulo com lados A e B

const areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));