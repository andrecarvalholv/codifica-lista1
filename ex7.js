const prompt = require('prompt-sync')()
let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas: "))
let precoUnitario

if (quantidade < 12) {
    precoUnitario = 0.30
} else {
    precoUnitario = 0.25
}

let total = quantidade * precoUnitario
console.log("Valor total da compra: R$ " + total.toFixed(2))