// array é uma lista
// Elas são indexados por elementos
//                 0      1        2
const alunos = ['Luiz', 'Mario', 'João'];
console.log(alunos[0])

// podemos editar

alunos[0] = 'Editado'
console.log(alunos)

// podemos saber o tamanho do array

console.log(alunos.length)

// podemos colocar um elemento no final do array

alunos.push("Final")
console.log(alunos)

// podemos colocar um elemento no começo do array

alunos.unshift('Começo')
console.log(alunos)

// podemos remover um elemento do final do array

const removido = alunos.pop()
console.log(removido)

// podemos remover um elemento especifico sem alterar o indice do arraty

delete alunos[1];
console.log(alunos)

// Array é considerado um objeto em JS

console.log(typeof alunos);
console.log(alunos instanceof Array);

// Podemos atribuir via desestruturação 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiro , segundo, ...resto] = numeros; // Desestruturando o array original e atribundo as constantes
console.log(resto)


