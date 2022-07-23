const anoNascimento = 1993
let Milennial

if (anoNascimento >= 1981 && anoNascimento <= 1996) Milennial = true
else Milennial = false

const ano = 1980
const Milennial2 = ano >= 1981 && ano <= 1996 ? true : false

const vendas = 10000
const meta = 8000(vendas > meta) ? (comissao = vendas * 0.1) : vendas * 0

// Equivale a
if (vendas > meta) {
  comissao = vendas * 0.1
} else {
  comissao = vendas * 0
}

const inscritos = 2000000

const premioYT =
  inscritos >= 50000000
    ? 'Premio Rubi'
    : inscritos >= 10000000
    ? 'Premio Diamante'
    : inscritos >= 1000000
    ? 'Premio Ouro'
    : inscritos >= 100000
    ? 'Premio Prata'
    : ''
