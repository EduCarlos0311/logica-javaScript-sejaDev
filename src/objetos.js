const pessoa = {
    nome: "Carlos",
    idade: 23,
    casado: false,
    notas: [5, 8, 10],
    endereco : {
        rua: "Rua xyz",
        numero: 100
    },
    cidade : {
        nome: "Paraibuna"
    }
};

console.log(pessoa["nome"]);
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa["casado"]);
console.log(pessoa["notas"][1]);
console.log(pessoa.notas[1]);
console.log(pessoa["endereco"]);
console.log(pessoa["endereco"]["numero"]);
console.log(pessoa["cidade"]["nome"]);
console.log(pessoa.endereco.rua);

const array = [pessoa, pessoa]
console.log(array);
