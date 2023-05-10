// 1. A partir da equação ax2 + bx + c = 0, criar uma função que calcule e retorne o valor de delta.

function bhaskara(a, b, c) {
    delta = b**2 - 4 * a * c
    return delta
}



// 2. Escrever uma função que retorne a lista de divisores de um número N, informado.

function divisores(numero) {
    let lista = []
    for (let valor; valor <= numero; valor++)
        if ((numero % valor) == 0) {
            lista.push(valor)
        }
        return lista
}

const divisores2 = function(numero) {
    let lista = []
    for (let valor; valor <= numero; valor++)
        if ((numero % valor) == 0) {
            lista.push(valor)
        }
        return lista
}

const divisores3 = (numero) => {
    let lista = []
    for (let valor; valor <= numero; valor++) {
        if ((numero % valor) == 0) {
            lista.push(valor)
        }
        return lista
    }
}

const divisores4 = (numero) => divisores(numero)