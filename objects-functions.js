const person = {
    name: "Carlos",
    lastName: "Santos"
}

//Object.keys(): Cria um array com todas as chaves do objeto
// console.log(Object.keys(person))

// //Object.values(): Cria um array com todas os valores do objeto
// console.log(Object.values(person))

// //Object.entries(): Cria um array com um array de objetos e valores
// const array = Object.entries(person)
// console.log(array)
// 
    // [['name', 'Carlos'], ['lastName', 'Santos']]


///////Exemplo real

const livros = {
    'Livro A': 19.90,
    'Livro B': 97.00,
    'Livro C': 20.00
}

const values = Object.values(livros)
// values = [19.90, 97.00, 20.00]
const sum = values.reduce((valor, acumulador) => valor + acumulador, 0)// acumula os valores do objeto iniciando com o parâmetro acumulador zerado
console.log(sum)
