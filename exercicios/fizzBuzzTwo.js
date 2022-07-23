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

console.log('Iniciando')

const calcularFizzBuzz = function (numero) {
  typeof numero !== 'number'
    ? (result = 'Não é um número')
    : (numero % 5 == 0) & (numero % 3 == 0)
    ? (result = 'FizzBuzz')
    : numero % 3 == 0
    ? (result = 'Fizz')
    : numero % 5 == 0
    ? (result = 'Buzz')
    : ''
  return result
}

console.log(calcularFizzBuzz(100))
calcularFizzBuzz(9)
calcularFizzBuzz(30)
calcularFizzBuzz('b')
