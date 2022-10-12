// Variável é um atributo que recebera um valor qualquer, pondendo variar de acordo com a construção do código

let nome = 'Márcio'; // o dado atribuido é do tipo String
var idade = 20 // o dado atribuido é do tipo Number

console.log(nome, 'é feliz quando está com sua namorada com idade de', idade, 'anos');

nome = 'Márcio';
idade = 19;

console.log(nome, 'é feliz quando está com sua namorada com idade de', idade, 'anos');

// Não podemos declarar uma váriavel começando com um número
// Não pode conter espaços ou "traços"

// Em situações em que não haverá mudança de valores, é recomendado a utilização da função "const"

const num1 = 10 
const num2 = 20

function media (num1,num2){
    let resultado

    resultado = (num1 + num2)/2
    console.log(resultado)
}
media(num1,num2)