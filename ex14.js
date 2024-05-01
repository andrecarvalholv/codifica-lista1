const prompt = require('prompt-sync')()
let soma = 0
let contador = 0
let numero

while (true) {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para sair): "))
    
    if (numero === 0) {
        break
    }
    
    soma += numero
    contador++
}

if (contador !== 0) {
    let media = soma / contador
    console.log("Média aritmética: " + media)
} else {
    console.log("Nenhum número foi digitado.")
}
