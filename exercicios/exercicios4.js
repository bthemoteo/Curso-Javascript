// // function multiplicar(num1, num2){
// //     let total = 0
// //     for (i=1; i<=num2; i++)   {
// //         total += num1
// //     }
// //     return total
// // }
// // console.log(multiplicar(2,5))
// // console.log(multiplicar(8,2))
// // console.log(multiplicar(2,100))
// // console.log(multiplicar(9,3))

// function repetirElemento(elemento, totalRepeticao){
//     let arrayElementos = []
//     for (i=0; i<totalRepeticao; i++){
//         arrayElementos.push(elemento) 
//     }
//     return arrayElementos
// }

// console.log(repetirElemento('teste',3))

function simboloMais(total){
    let simbolos = []
    for (i=0; i<total; i++){
        simbolos.push('+')
    }
    return simbolos
}

console.log(simboloMais(5))