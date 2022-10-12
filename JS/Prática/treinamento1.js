// Variáveis

let idade = 25;
console.log(idade)

// Constante

const apelido = "marcio"

// tipos Primitivos

let nome = 'Rafael';       //string
let preco = 25;            // number
let esta_aprovado = true;  //boolean
let sobrenome;             // undefined 
let cor_selecionado = null // Redefenir um valor 

typeof cor_selecionado;    // Qual é o tipo? Objeto

// Objeto 

let pessoa = { 
// Chave: Valor
    nome: 'Rafael',
    idade: 25,
    esta_aprovado: true,
    sobrenome: 'de sousa'
};
//Declaração da variavel logo após a chave do valor de interesse
console.log(pessoa.esta_aprovado)

// Arrays

let familia = [26,45,50,17]
console.log(familia[2]) // valor = 50
console.log(familia.length) // tamanho do array

// function ( verbo + Substantivo)
let cor_site = "azul"
function reseta_cor(cor,tonalidade){
    return cor_site = cor + ' ' + tonalidade;    
};

console.log(reseta_cor("vermelho",'escuro'))
//tipos de funções
    // Realiza uma tarefa, não devolve nada

function dizer_nome(){
    console.log('Márcio')
}

dizer_nome()

    // Realiza uma tarefa, e devolve um valor

function multiplica_por_2(a){
    return resuktado = a * 2;
}

console.log(multiplica_por_2(2))

// Operadores Aritmedicos
// +, -, *, /, **

let salario = 10000
console.log(salario * 2)

// Operadores Ternário

let pontos = 100;
            //condição     True    : False
let tipo = pontos > 100 ? 'premium':'comum';
console.log(tipo);

// Operadores lógicos
    // e (&&)
    console.log(false && false) // false
    console.log(true && true) // true

    // ou (||)
    console.log(false || false) // false
    console.log(false || true) // true

    // not (!)
    console.log(false != true) // true
    console.log(false != false) // false
    