const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.idade)

// criando um função 

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa("marcio","miranda",22)
console.log(pessoa3)

// da mesma forma que em Array, podemos fazer uma atribuição por desestruturação de objetos

const pessoa = {
    //nome1: 'marcio',
    sobrenome1: "henrique",
    idade: 20,
    endereço:{
        rua: "rua 1",
        numero : 20,
    }
};

const {nome1: r = "Carlos", sobrenome1} = pessoa; 

// caso a entrada do valor não EXISTA terá um valor "Substituto"

console.log(r)

