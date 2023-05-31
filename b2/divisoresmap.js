leia = require('prompt-sync')()

function divisores(numero) {
    let lista = []

    for (let valor = 0; valor <= numero; valor++)
        if ((numero % valor) == 0) {
            lista.push(valor)
        }
        
    return lista
}

numeros = []
listaDivisores = []

while(true) {
    console.log('\nInforme um número para obter seus divisores ou 0 para encerrar.\n')
    num = leia('   NUM : ')

    if (num == 0) {
        break
    } else {
        numeros.push(num)
    }
}

listaDivisores = numeros.map(divisores)

console.log(numeros)
console.log(listaDivisores)

for (x = 0; x <= numeros.length; x++) {
    console.log(`   O número ${numeros[x]} possui ${listaDivisores[x].length} divisores: ${listaDivisores[x]} `)
}
