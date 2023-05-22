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
let precosLanches = [9.99, 12.99, 15.99, 4.99]
let vetorQuantidade = [0, 0, 0, 0]
let qtdLanches = vetorQuantidade.length
let vetorPedidos = []

console.clear()

while (true) {

    menu("frank's lanches", "Funcionário", "Usuário")

    opcaoAcesso = leia("    Opção: ")

    switch (opcaoAcesso) {
        case "1":
    }

    while(true) {
        menu("frank's lanches", "Realizar Pedido", "Encerrar Expediente")

        do {
            opcaoMenu = leia("  Opção : ")
            
            if (opcaoMenu < 1 || opcaoMenu > 2) {
                console.log("\nOpção inválida! Tente novamente...\n")
                }

        } while ( opcaoMenu < 1 || opcaoMenu > 2)
        
        // Encerra expediente.
        if (opcaoMenu == 2) {
            break }
        
        console.clear()
        
        while(true) {
            menu("cardápio", "Hambúrguer ------- $9.99", "Eggs-Burger ------ $12.99", "X-Tudo ----------- $15.99", "Refrigerante ----- $4.99", "Encerrar Pedido")
            
            do {
                codLanche = leia("  Opção : ")

                if (codLanche < 1 || codLanche > qtdLanches + 1) {
                    console.log("\nOpção inválida! Tente novamente...\n")
                    }

            } while (codLanche < 1 || codLanche > qtdLanches + 1)

            
            if (codLanche == qtdLanches + 1) { // Encerra o pedido caso seja a última opção.
                break

                } else { // Caso contrário, adiciona o preço do lanche ao pedido e incrementa a qtd do lanche.
                    totalPedido += precosLanches[codLanche - 1]
                    vetorQuantidade[codLanche - 1]++
                    }

            }
        
        receitaDia += totalPedido
        // Adiciona cada total de pedido a um vetor, respeitando a ordem em que foram feitos.
        vetorPedidos[contPedidos] = totalPedido
        totalPedido = 0 
        contPedidos++

        console.clear()
    }
}

console.log(`\n= RELATÓRIO =>\n`)

console.log(`> Lanches Pedidos: \n`)

for (let x = 0; x < qtdLanches; x++) {
    console.log(`   ${nomesLanches[x]} = ${vetorQuantidade[x]}`)
}

console.log("\n> Receita do Expediente: \n")

for (let x = 0; x < contPedidos; x++) {
    console.log(`   Pedido ${x+1} = R$${vetorPedidos[x]}`)

    // Imprime o total do expediente após o último pedido.
    if (x == contPedidos - 1) {
        console.log(`\n   Total : R$${receitaDia}\n`)
    }
}

console.log()