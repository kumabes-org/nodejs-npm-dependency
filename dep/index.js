const Calculadora = require('./src/calculadora.js')

const calculadora = new Calculadora();
const somar = calculadora.somar(2, 2);
console.log(`2 + 2 = ${somar}`);