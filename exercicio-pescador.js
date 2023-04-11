/*
1 - João, um pescador, gostaria de controlar o rendimento diário do seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca 
do estado de São Paulo(50 kgs) deve pagar a multa de R$ 4,00 por quilo excedente. João precisa
que você faça um script que leia o peso de peixes de João e verifica se há ou não excesso. Se houver,
gravar na váriavel "excesso" e na váriavel "multa" o valor da multa que João deverá pagar.
*/

const pesoLimite = 50
const multaPorPesoExcedente = 4
const  pesoPorPeixe = 585

let excesso = pesoPorPeixe > pesoLimite ? pesoPorPeixe - pesoLimite : 0;
let multa = excesso * multaPorPesoExcedente;

if (multa == 0) {
   console.log("Não houve excesso.")
}

console.log("Multa de R$" + multa + ",00");


   