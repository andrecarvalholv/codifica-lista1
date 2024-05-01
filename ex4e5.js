const prompt = require('prompt-sync')()
let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "))
let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "))

let media = (nota1 + nota2) / 2

console.log("Média semestral: " + media)

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado")
} else {
    console.log("Você foi REPROVADO! Estude mais")
}