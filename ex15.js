const prompt = require('prompt-sync')()
let soma = 0
let somaPesos = 0
let numero
let peso

while (true) {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para sair): "))
    
    if (numero === 0) {
        break
    }
    
    peso = parseFloat(prompt("Digite o peso deste número: "))
    
    soma += numero * peso
    somaPesos += peso
}

if (somaPesos !== 0) {
    let media = soma / somaPesos;
    console.log("Média ponderada: " + media)
} else {
    console.log("Nenhum número foi digitado.")
}
