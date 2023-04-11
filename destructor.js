const pessoa = {
    nome: "Carlos",
    sobrenome: "Santos",
    idade: 27,
    senha: "123"
}
// Exemplo sem utilizar DESTRUCTION
// const nome = pessoa.nome
// const sobrenome = pessoa.sobrenome
// const idade = pessoa.idade

//Exemplo com DESTRUCTION

const { nome, idade } = pessoa
// const pessoa.nome
//const pessoa.idade

// console.log(nome)
// console.log(idade)

const pessoaComMaisDados = {
    ...pessoa,
    idade: 30,
    senha: "456"
}

console.log(pessoaComMaisDados)

const array = [10, 20, 3, 4]
const [a, b] = array

const newArray = ["Início", ...array, 4, 5, "final"]

console.log(newArray)