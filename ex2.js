const prompt = require('prompt-sync')() 
let eleitores = parseInt(prompt("Digite o número total de eleitores: "))
let brancos = parseInt(prompt("Digite o número de votos brancos: "))
let nulos = parseInt(prompt("Digite o número de votos nulos: "))
let validos = parseInt(prompt("Digite o número de votos válidos: "))

let percentBrancos = (brancos / eleitores) * 100
let percentNulos = (nulos / eleitores) * 100
let percentValidos = (validos / eleitores) * 100

console.log("Percentual de votos brancos: " + percentBrancos + "%")
console.log("Percentual de votos nulos: " + percentNulos + "%")
console.log("Percentual de votos válidos: " + percentValidos + "%")