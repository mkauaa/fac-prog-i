let max = 10
let aux = 0 
let soma = 0

console.log("Soma dos números entre 1 e ", max)

if (max <= 1) {
    console.log("Tente novamente com um valor maior que 1.")
} else {
    while (aux <= max) {
        soma += aux
        aux += 1
    }
}

console.log("Soma: ", soma)