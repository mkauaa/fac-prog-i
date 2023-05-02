function fatorial(num) {
    let fatorial = 1
    let sequencia = 1
    let numero = num

    while(sequencia <= numero) {
    fatorial = fatorial * sequencia 
    sequencia++
    }

    return fatorial;
  }

let qTermos = 15
let soma = 1
let denominador = 1

if (soma > 0) {
    while (denominador <= qTermos) {
        soma += 1 / fatorial(denominador)
        denominador++
    }
}

console.log("Valor da base =", soma)