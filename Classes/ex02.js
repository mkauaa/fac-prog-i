class Efetuar {
    constructor() {
        valor1 = 0.0
        valor2 = 0.0
        resultado = 0
        operacao = ""
    }
    calcular(op, v1, v2) {
        this.operacao = op
        this.valor1 = v1
        this.valor2 = v2
    }
}