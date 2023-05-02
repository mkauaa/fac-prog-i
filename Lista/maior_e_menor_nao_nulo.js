leia = require('prompt-sync')()

console.log('= Informe um valor não-nulo (ou zero para parar) =')

let cont = 0
let maior
let menor
let num

do {
    num = leia('    Nº: ')
    if (cont == 0 && num != 0) {
        maior = num
        menor = num
    } else {
        if (num > maior && num != 0) {
            maior = num
            }
        if (num < menor && num != 0) {
            menor = num
            }
    }
    cont++
} while (num != 0)

console.log()
console.log('= Dentre os números informados . . . =')
console.log('   > O maior número informado foi', maior)
console.log('   > O menor número informado foi', menor)