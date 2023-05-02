// Escrever um programa que leia os dados existentes em uma relação de pacientes de uma clínica. 
// Para paciente são informados o nome, o sexo, o peso, a idade e a altura. 
// Para sinalizar o fim da lista será digitada a palavra “fim” no nome do paciente.
// Exiba um relatório contendo: 
// i. a quantidade de pacientes.
// ii. a média de idade dos homens.
// iii. a quantidade de mulheres com altura entre 1,60 e 1,70 e peso acima de 70kg.
// iv. a quantidade de pessoas com idade entre 18 e 25.
// v. o nome do paciente mais velho.
// vi. o nome da mulher mais baixa.
// vii. neste item, você cria uma situação interessante constrói o
// viii. algoritmo correspondente.

let nome = ''
let genero
let peso
let idade
let altura
let cont = 0
let soma_idade = 0
let cont_mulheres

leia = require('prompt-sync')()

console.log('= Informe, sobre o paciente ', cont+1, '=')

while (nome != 'fim') {
    nome = leia('   > Nome: ')
    genero = leia('   > (M / F) Gênero: ')
    peso = leia('   > ( KG ) Peso: ')
    idade = leia('   > Idade: ')
    altura = leia('   > ( CM ) Altura: ')

    if (genero == "M") {
        soma_idade += idade
    }

    if (160 < altura < 170 && peso > 70) {
        cont_mulheres++
    }

    cont++
}

console.log('== RELATÓRIO ==')
console.log('   > Foram cadastrados', cont, 'pacientes.')
console.log('   >A média de idade entre os homens equivale a')
console.log('   >', 'mulheres com altura entre 1,60 e 1,70 apresentaram peso acima de 70kg')