 // operador ... rest(juntar)/spread(espalhar)
// usar resto com parametro de funcao

//usar spread com objeto
const funcionario = {nome: 'Bruna', salario: 1598.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Bruna', ...grupoA, 'Rafaela']
console.log(grupoFinal)
