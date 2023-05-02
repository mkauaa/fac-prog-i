leia = require('prompt-sync')();

let a
let b
let dif

console.log("Informe dois valores: ")
a = parseFloat(leia("V1: "))
b = parseFloat(leia("V2: "))

if (a > b)
    dif = a - b
else
    dif = b - a

console.log("A diferença entre ", a, " e ", b, " equivale a ", dif)