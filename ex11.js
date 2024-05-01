const prompt = require('prompt-sync')()
while (true) {
    let valor = parseInt(prompt("Digite um número inteiro (digite 0 ou um número negativo para sair): "))
    
    if (valor <= 0) {
        break
    }
    
    if (valor % 2 === 0) {
        console.log(valor + " é PAR")
    } else {
        console.log(valor + " é ÍMPAR")
    }
}
