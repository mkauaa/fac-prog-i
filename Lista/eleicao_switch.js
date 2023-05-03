leia = require('prompt-sync')()

let voto
let totalVotos = 0
let contAjax = 0
let contAquiles = 0
let contUlisses = 0
let contNulo = 0
let contBranco = 0
let contInvalidos = 0

do {
    console.log('== VOTE ==')
    console.log('(1) Ajax \n(2) Aquiles \n(3) Ulisses \n(4) Nulo \n(5) Em Branco \n(6) Encerrar')
    voto = leia('Seu Voto :: ')

    switch (voto) {
        case "1":
            totalVotos++
            contAjax += 1
            break;

        case "2":
            totalVotos++
            contAquiles++
            break;

        case "3":
            totalVotos++
            contUlisses++
            break;

        case "4":
            totalVotos++
            contNulo++
            break;

        case "5":
            totalVotos++
            contBranco++
            break;

        case "6":
            break;

        default:
            totalVotos++
            contInvalidos++ 
            break;
    }

} while (voto != 6)

console.clear()

console.log('== Resultado ==\n')
console.log('> Ajax >', contAjax, '>', contAjax/ totalVotos+'%')
console.log('> Aquiles >', contAquiles, '>', contAquiles/ totalVotos+'%')
console.log('> Ulisses >', contUlisses, '>', contUlisses/ totalVotos+'%')
console.log('> Nulo >', contNulo, '>', contNulo/ totalVotos+'%')
console.log('> Em Branco >', contBranco, '>', contBranco/ totalVotos+'%')
console.log('> Total >', totalVotos)

console.log()