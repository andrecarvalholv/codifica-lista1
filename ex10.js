const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Digite um número inteiro: "))
let contador = 0

while (contador < 10) {
    console.log(numero)
    contador++
}
