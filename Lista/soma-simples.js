prompt = require('prompt-sync')();
let v1
let v2
let soma

console.log("Insira os valores...")
console.log()

v1 = parseInt(prompt("V1: "))
v2 = parseInt(prompt("V2: "))
soma = v1 + v2

console.log(v1, " + ", v2, " = ", soma)

