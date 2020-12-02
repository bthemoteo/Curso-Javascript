// pessoa -> 123 -> {...}
const pessoa = {nome: 'Bruna'}
pessoa.nome = 'João'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} Erro

Object.freeze(pessoa) // Nao pode alterar o objeto

pessoa.nome = 'Maria'

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Pedro'})
console.log(pessoaConstante)