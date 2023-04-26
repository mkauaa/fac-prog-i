let n = 20
let valor = 0
let auxfat = 1
let fat = 1
let cont = 1

if (valor > 0) {
    while (auxfat <= n) {
        valor = valor + (1 / fat)
        auxfat = auxfat + 1
    }
    while(cont <= auxfat) {
        fat = fat * cont 
        cont++
    }
}

console.log("Valor da base =", v)