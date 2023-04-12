leia = require('prompt-sync')();

let a
let b

console.log("Informe as medidas do retângulo...")
a = parseInt(leia("Lado A: "))
b = parseInt(leia("Lado B: "))

console.log("A área equivale a ", a, " x ", b, " = ", a * b)