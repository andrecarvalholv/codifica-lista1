const prompt = require('prompt-sync')()
let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "))
let fahrenheit = (celsius * 9/5) + 32
console.log("A temperatura em Fahrenheit é: " + fahrenheit)
