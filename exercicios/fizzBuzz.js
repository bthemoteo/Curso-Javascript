// Escreva um programa que imprima os números de 1 a 100, mas nos múltiplos 
// de 3 imprima "Fizz" em vez do  número e nos múltiplos de 5 imprima "Buzz". 
// Para os números que são múltiplos de tanto 3 como 5, imprima "FizzBuzz".

// for (i=1; i<=100; i++){
//     if (i % 3 == 0 & i % 5 != 0){
//         numero = 'Fizz'
//     }
//     else if (i % 5 == 0 & i % 3 != 0){
//         numero = 'Buzz'
//     }
//     else if (i % 5 == 0 & i % 3 == 0){
//         numero = 'FizzBuzz'
//     }
//     else {
//         numero = i
//     }
//     console.log(numero)
// }

function fizzBuzz(numero){            
            if (typeof numero !== 'number'){
                resultado = 'Não é um número'
            }
            else if (numero % 5 == 0 & numero % 3 == 0){
                resultado = 'FizzBuzz'
            }
            else if (numero % 3 == 0){
                resultado = 'Fizz'
            }
            else if (numero % 5 == 0){
                resultado = 'Buzz'
            }
            else {
                resultado = numero
            }
            console.log(typeof numero)
            return resultado
}

console.log(fizzBuzz(9))
console.log(fizzBuzz(20))
console.log(fizzBuzz(30))
console.log(fizzBuzz('teste'))
console.log(fizzBuzz(16))