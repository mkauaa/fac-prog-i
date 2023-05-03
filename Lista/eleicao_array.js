leia = require('prompt-sync')()

let voto
let totalVotos = 0

let nomes = []
let totais = []
let percentuais = []

for (let x = 0; x < 3; x++) {
    console.log('Informe o nome do', x + 1 + 'º candidato.')
    nomes[x] = leia('Nome: ')
}

for (let x = 0; x < 6; x++) {
    totais[x] = 0
}

for (let x = 0; x < 6; x++) {
    percentuais[x] = 0
}

do {
    console.log('== VOTE ==')
    console.log(`(1) ${nomes[0]} \n(2) ${nomes[1]} \n(3) ${nomes[2]} \n(4) Nulo \n(5) Em Branco \n(6) Encerrar`)
    voto = leia('Seu Voto :: ')

    switch (voto) {
        case "1":
            totalVotos++
            totais[0]++
            break;

        case "2":
            totalVotos++
            totais[1]++
            break;

        case "3":
            totalVotos++
            totais[2]++
            break;

        case "4":
            totalVotos++
            totais[3]++
            break;

        case "5":
            totalVotos++
            totais[4]++
            break;

        case "6":
            break;

        default:
            totalVotos++
            totais[5]++
            break;
    }

} while (voto != 6)

for (let x = 0; x < 6; x++) {
    percentuais[x] = totais[x] / totalVotos
}

console.clear()

console.log('== Resultado ==\n')
console.log(`> ${nomes[0]} > ${totais[0]} > ${percentuais[0]}%`)
console.log(`> ${nomes[1]} > ${totais[1]} > ${percentuais[1]}%`)
console.log(`> ${nomes[2]} > ${totais[2]} > ${percentuais[2]}%`)
console.log(`> Nulos > ${totais[3]} > ${percentuais[3]}%`)
console.log(`> Em Branco > ${totais[4]} > ${percentuais[4]}%`)
console.log(`> Inválidos > ${totais[5]} > ${percentuais[5]}%`)
console.log('> Total >', totalVotos)

console.log()