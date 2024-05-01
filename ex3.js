const prompt = require('prompt-sync')()
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "))
let num2 = parseInt(prompt("Digite o segundo número inteiro: "))
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "))
let num4 = num1 + num2 + num3

num1 += 25
num2 *= 3
num3 *= 0.12

console.log("Resultado num1:", num1)
console.log("Resultado num2:", num2)
console.log("Resultado num3:", num3)
console.log("Resultado num4:", num4)