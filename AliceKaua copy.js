function menu(titulo, ...opcoes) {
    console.log(`\n= ${titulo.toUpperCase()} =>\n`)

    for (let x = 0; x < opcoes.length; x++) {
        console.log(`   ( ${x+1} )   ${opcoes[x]}`)
    }

    console.log()
}

function foraDoIntervalo(x, a, z) {
    if (x < a || x > z) {
        return true
    } else {
        return false
        }
}

function exibeRelatorio() {
    console.log(`\n= RELATÓRIO =>\n`)
    console.log(`> Lanches Pedidos: \n`)
    
    for (let x = 0; x < qtdLanches; x++) {
        console.log(`   ${nomesLanches[x]} = ${vetorQuantidade[x]}`)
        }
    
    console.log("\n> Receita do Expediente: \n")
    
    for (let x = 0; x < contPedidos; x++) {
        console.log(`   Pedido ${x+1} = R$${vetorPedidos[x].toFixed(2)}`)
    
        // Imprime o total do expediente após o último pedido.
        if (x == contPedidos - 1) {
            console.log(`\n   Total : R$${receitaDia.toFixed(2)}\n`)
            }
        }       
}

function autenticacao() {
    do {
        tentativa = leia("=> Insira a senha de acesso: ")
        
        if (tentativa == senha) {
            console.log("\nAcesso Concedido.")
        } else if (tentativa != senha) {
            console.log("\nAcesso Recusado. Tente novamente...")
            }

        } while (tentativa != senha)
}

function realizaPedido() {
    while(true) {
        console.clear()

        menu("cardápio", "Hambúrguer ------- $9.99", "Eggs-Burger ------ $12.99", "X-Tudo ----------- $15.99", "Refrigerante ----- $4.99", "Encerrar Pedido")
        
        do {
            codLanche = leia("  Opção : ")
            
            if (foraDoIntervalo(codLanche, 1, qtdLanches+1)) {
                console.log("\nOpção inválida! Tente novamente...\n")
                }

        } while (foraDoIntervalo(codLanche, 1, qtdLanches+1))
        
        if (codLanche == qtdLanches + 1) {
            break

            } else {
                // A linha abaixo incrementa o valor total do pedido com o valor do item atual. 
                // Dá pra substituir essa variável de soma por um vetor ao qual seriam adicionados
                // os valores da cada item do pedido, para no fim serem somados com um Reduce.
                totalPedido += precosLanches[codLanche - 1]
                // Essa incrementa a quantidade de cada lanche considerando todos os pedidos.
                // Poderia ser juntada numa matriz junto ao nome dos lanches (conferir se dá)
                vetorQuantidade[codLanche - 1]++
                }
        }
            receitaDia += totalPedido
            vetorPedidos[contPedidos] = totalPedido
            totalPedido = 0 
            contPedidos++
    
            console.clear()
}

function Pedido(cliente, itens, valores) {
    this.cliente,
    itens: [],
    valores: []
    }

    addItem = (Pedido, item) = {(1)}

leia = require('prompt-sync')()

let opcaoMenu
let codLanche
let contPedidos = 0
let totalPedido = 0
let receitaDia = 0
let senha = 1234

let nomesLanches = ['Hamburguer', 'Eggs-Burger', 'X-Tudo', 'Refrigerante']
let precosLanches = [9.99, 12.99, 15.99, 4.99]
let vetorQuantidade = [0, 0, 0, 0]
let vetorPedidos = []
let qtdLanches = vetorQuantidade.length


console.clear()

while (true) {
    menu("frank's lanches = MENU DE ACESSO", "Cliente", "Funcionário", "Sair")

    do {
        opcaoAcesso = leia("    Opção: ")

        if (foraDoIntervalo(opcaoAcesso, 1, 3)) {
            console.log("\nOpção inválida! Tente novamente...\n")
            }

        } while (foraDoIntervalo(opcaoAcesso, 1, 3))

    switch (opcaoAcesso) {
        case "1":
            realizaPedido()
            console.log(`Pedido Nº ${contPedidos} anotado!`)
            console.log(`Custará R$${vetorPedidos[contPedidos-1].toFixed(2)}.`)
            break

        case "2":  
            console.log() 
            autenticacao()

            while(true) {
                console.clear()

                menu("frank's lanches", "Realizar Pedido", "Encerrar Expediente")
        
                do {
                    opcaoMenu = leia("  Opção : ")
                    
                    if (foraDoIntervalo(opcaoMenu, 1, 2)) {
                        console.log("\nOpção inválida! Tente novamente...\n")
                        }
        
                    } while (foraDoIntervalo(opcaoMenu, 1, 2))

                console.clear()
                
                if (opcaoMenu == 1) {
                    realizaPedido()
                } else if (opcaoMenu == 2) {
                    exibeRelatorio()
                    console.log("\nPrograma encerrado!\n")
                    return
                }
            }

        case "3":
            console.log("\nPrograma encerrado!\n")
            return
        }
    }
