const variavel = 10
let array = [true, false, 0, 1, 2, "String aqui", "sejadev"]

/*
console.log(array);
array.pop();// remove o último elemento do array
console.log(array);
array.push("Nova string", 100000, true, "or", false);// Adiciona elementos ao final do array
console.log(array); 
*/


/////////////////

/*let lista = [4, 6, 7, 30, 21];

//for..in
for (let posicao in lista) {
    console.log(lista[posicao]);
}

//for..of
for (let arr of lista) {
    console.log(arr);
}


    Dado um array com x números, encontrar a média desses números
    média = (soma dos elementos) / tamanho
*/

const newArray = [5, 12, 4, 11];
let soma = 0

for (let i of newArray) {
    soma += i;
};

const media = soma / newArray.length;
console.log("Média = ", media);
