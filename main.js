function menu(titulo, ...opcoes) {
    console.log(`\n= ${titulo.toUpperCase()} =>\n`)

    for (let x = 0; x < opcoes.length; x++) {
        console.log(`   ( ${x+1} )   ${opcoes[x]}`)
    }

    console.log()
}

leia = require('prompt-sync')()

let opcaoMenu
let codLanche
let contPedidos = 0
let totalPedido = 0
let receitaDia = 0


let nomesLanches = ['Hamburguer', 'Eggs-Burger', 'X-Tudo', 'Refrigerante']
let precoLanches = [9.99, 12.99, 15.99, 4.99]
let qtdLanches = [0, 0, 0, 0]
let vetorPedidos = []

while(true) {
    menu("frank's lanches", "Realizar Pedido", "Encerrar Expediente")
    opcaoMenu = leia("  Opção : ")
    
    if (opcaoMenu == 2) {
        break }
    
    console.clear()
    
    while(true) {
        menu("cardápio", "Hambúrguer ------- $9.99", "Eggs-Burger ------ $12.99", "X-Tudo ----------- $15.99", "Refrigerante ----- $4.99", "Encerrar Pedido")
        codLanche = leia("  Opção : ")

        if (codLanche == qtdLanches.length + 1) {
            break

            } else {
                totalPedido += precoLanches[codLanche - 1]
                qtdLanches[codLanche - 1]++
                }

        }
    
    receitaDia += totalPedido
    vetorPedidos[contPedidos] = totalPedido
    totalPedido = 0
    contPedidos++

    console.clear()
}

console.log(`\n= RELATÓRIO =>\n`)

console.log(`> Lanches Pedidos: \n`)

for (let x = 0; x <= 2; x++) {
    console.log(`   ${nomesLanches[x]} = ${qtdLanches[x]}`)
}

console.log("\n> Receita do Expediente: \n")

for (let x = 0; x < contPedidos; x++) {
    console.log(`   Pedido ${x+1} = R$${vetorPedidos[x]}`)
    if (x == contPedidos - 1) {
        console.log(`\n   Total : R$${receitaDia}\n`)
    }
}

console.log()