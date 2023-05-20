function titulo(titu, ...arr) {
    console.log(`= ${titu.toUpperCase()} =>\n`)
    for (let x = 0; x < arr.length; x++) {
        console.log(`   ( ${x+1} )   ${arr[x]}`)
    }

    console.log()
}

titulo("frank's lanches", "Realizar Pedido", "Encerrar Expediente")
titulo("cardápio", "Hambúrguer ------- $5,00", "Eggs-Burger ------ $6,00", "X-Tudo ----------- $7,00", "Encerrar Pedido")