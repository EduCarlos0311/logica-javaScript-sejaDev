/*
    A prefeitura possui uma lista com idade de cada morador e quer saber a 
    quantidade de moradores que são eleitores obrigatórios, facultativos ou
    não eleitores de acordo com as informações abaixo:

    Obrigatório: Entre 18 e 69 anos;
    Facultativo: Entre 16 e 17 anos ou acima de 70 anos;
    Não eleitor: Abaixo de 16 anos;
*/

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorios = 0
let facultativos = 0
let naoEleitores = 0

for (let i of lista) {
    if (i >= 18 && i <= 69) obrigatorios++;
    else if (i < 16) naoEleitores++;
    else facultativos++;
}
console.log("====RESULTADO DA PESQUISA====")
console.log("Obrigatórios: " + obrigatorios + "\nFacultativos: " + facultativos + "\nNão Eleitores: " + naoEleitores);
