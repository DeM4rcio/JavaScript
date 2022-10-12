// Factory Functions ( Função de fábrica)

function criarCelular(marca_celular,tamanho_tela,capacidade_bateria){
        return {
            marca_celular,
            tamanho_tela,
            capacidade_bateria,
            ligar(){
                console.log('Fazendo ligação...')
        }
    }
}

//let celular1 = criarCelular('Iphone', 100, 5000)
//console.log(celular1)

// Constructor Functions
function Celular(marca_celular, tamanho_tela, capacidade_bateria){
    this.marca_celular = marca_celular,
    this.tamanho_tela = tamanho_tela,
    this.capacidade_bateria = capacidade_bateria,
    this.ligar = function(){
        console.log('Fazendo ligação...')
    }
};

const celular = new Celular('iphone',5.5,5000)
console.log(celular)

//clonando objetos
const novo_objeto = Object.assign(celular) 
console.log(novo_objeto)

//Math site do mozzila

// Template

const template =  `um texto qualquer ${2 ** 2}`
console.log(template)

// Date

const data1 = new Date()


// Função normal

/*const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
];

console.log(marcas.find(function(marca){
    return marca.nome === 'a';
}));
*/

// Arrow function

const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];

console.log(marcas.find( marca => marca.nome === 'a'));