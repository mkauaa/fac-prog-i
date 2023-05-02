let t = 0
let s = 0
let p = 1
let n = 2
let m = 3
let aux = 1

do {
    s = s + aux
    aux = aux + 1
} while (aux <= n)

aux = 1

do {
    p = p * aux
    aux = aux + 1
} while (aux <= m)

t = s * p

console.log(t, "=", s, "*", p)