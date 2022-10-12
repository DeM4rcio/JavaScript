/* 
O intuito desta atividade é praticar a utilização de variáveis e constantes

Sabendo que Márcio Henrique tem 20 anos, pesa 75 KG com altura de 1,70 cm
Utilize estas funções para saber:
- Ano de nascimento
- IMC
*/
const nome = 'Márcio henrique';
const idade = 20;
const peso = 75;
const altura = 1.70;

let imc
let anoNascimento

imc = peso / altura**2
console.log(`Márcio tem o imc de indíce ${imc}`);// aqui tem a utilização de "format" conhecido na linguagem PY

anoNascimento = 2022 - idade;
console.log(anoNascimento)

