const prompt = require('prompt-sync')()
let N = parseInt(prompt("Digite um número inteiro: "))
let contador = 1

while (contador <= 5) {
    console.log(contador + " x " + N + " = " + (contador * N))
    contador++
}
