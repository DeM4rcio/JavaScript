// Funções são "máquinas" para realizar algum processo

function teste(palavra){
    console.log(`função em execução ${palavra}`)
}

teste('boa!!');

function media (num1, num2){
    const resultado = (num1 + num2)/2
    return resultado //aqui está havendo o retorno de um resultado
}

const resultado = media(2,2);
console.log(resultado)

// Existe outras forma de fazer uma função 

const funcao = function(x){
    console.log(x)
};

funcao("deu certo!")

// Arrow Function

const arrow = (x) => {
    console.log(x)
};

arrow("Arrow!")