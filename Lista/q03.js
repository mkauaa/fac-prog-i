leia = require('prompt-sync')();

let f

f = parseFloat(leia("Informe a temperatura em °F: "))

let c = (f - 32) / 1.8

console.log(f, "°F", " = ", c, "°C")