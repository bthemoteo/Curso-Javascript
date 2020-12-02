//usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desconto)
    }
}

const produto1 = new Produto('Borracha', 6.99, 0.15)
const produto2 = new Produto('Computador', 2998.90, 0.25)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase /30) * (30 - faltas)
        }
    }
}
const funcionario1 = criarFuncionario('Bruna', 5860, 3)
const funcionario2 = criarFuncionario('Sonia', 1190, 1)
console.log(funcionario1.getSalario(), funcionario2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)