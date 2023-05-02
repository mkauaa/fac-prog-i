let n = 20
let h = 0
let aux = 1

if (n > 0) {
    while (aux <= n) {
        h = h + (1 / aux)
        aux = aux + 1
    }
}

console.log("H =", h.toFixed(2))