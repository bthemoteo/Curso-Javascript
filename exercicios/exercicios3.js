function maiorOuIgual(num1, num2){
   if (typeof num1 != typeof num2){
       return false
   }
   return num1 >= num2
} 

console.log(maiorOuIgual(5,2))
console.log(maiorOuIgual(3,8))
console.log(maiorOuIgual(5,'5'))

function inverterValor(valor){
    tipo = typeof valor

    if (tipo == 'boolean')
    return !valor
    else if (tipo == 'number')
    return -valor
    else
    return `booleano ou numero esperados, mas o parametro é do tipo ${tipo}`
}

console.log(inverterValor(10))
console.log(inverterValor(false))
console.log(inverterValor('oi'))
console.log(inverterValor(-45))