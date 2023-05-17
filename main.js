leia = require('prompt-sync')()

let opcao1
let opcao2
let totalPedido = 0
let totalExpediente = 0
let qtdLanches = [0, 0, 0]
let nomeLanches = ['Hamburguer', 'Eggs-Burger', 'X-Tudo']


console.log("\n==================== FRANK'S LANCHES =================== \n")

while(true) {
    console.log(" ----- Menu ----> \n")
    console.log("( 1 ) Realizar Pedido \n( 2 ) Encerrar Expediente\n")
    opcao1 = leia("Opção : ")
    
    if (opcao1 == 2) {
        break }
    
    console.clear()
    
    while(true) {
        console.log(" --- Cardápio --> \n ")
        console.log("( 1 ) Hambúrguer ----- $5,00 \n( 2 ) Eggs-Burger ---- $6,00 \n( 3 ) X-Tudo --------- $7,00 \n( 4 ) Encerrar pedido \n")
        opcao2 = leia("Opção : ")
        
        
        switch (opcao2) {
            case "1":
                totalPedido += 5
                qtdLanches[1] += 1

                break

            case "2":
                totalPedido += 6
                qtdLanches[2] += 1
                break

            case "3":
                totalPedido += 7
                qtdLanches[3] += 1
                break       
        }

        if (opcao2 == 4) { 
            break }
        console.log(`\n-> Total do Pedido: ${totalPedido}\n`)

        }
    
    totalExpediente += totalPedido
    totalPedido = 0

    console.clear()
}


console.log(`\n-- RELATÓRIO -->\n`)
console.log(`> Total Expediente : ${totalExpediente}\n`)
console.log(`> Lanches Pedidos: \n`)

for (let x = 0; x <= 2; x++) {
    console.log(`${nomeLanches[x]} = ${qtdLanches[x]}`)
}
