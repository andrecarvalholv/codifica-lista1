function isPrimo(num) {
    if (num <= 1) {
        return false
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    
    return true;
}

let contador = 0
let numero = 101

while (contador < 50) {
    if (isPrimo(numero)) {
        console.log(numero)
        contador++
    }
    numero++
}
