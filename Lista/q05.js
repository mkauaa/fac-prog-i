leia = require('prompt-sync')();

let a
let b
let c 
let maior

a = parseInt(leia("V1 = "))
b = parseInt(leia("V2 = "))
c = parseInt(leia("V3 = "))

maior = a

if (b > maior)
    maior = b
else if (c > maior)
    maior = c

console.log("O maior número informado é ", maior)
            