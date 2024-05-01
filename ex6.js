const prompt = require('prompt-sync')()
let ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo: "))
let ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo: "))
let ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo: "))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero")
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles")
    } else {
        console.log("Triângulo escaleno")
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.")
}