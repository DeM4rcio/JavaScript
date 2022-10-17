// alguns dos exemplos de operadore lógicos
/* 
&& -> AND
|| -> OR
! -> NOT
*/

const aprovação = true
const semestreConcluido = false
if (aprovação === true){
    if (aprovação && semestreConcluido === true) {
        console.log(`O aluno Márcio  teve sua aprovação porém sem a conclusão do semestre `)
    }else{
        console.log(`O aluno Márcio não teve sua aprovação no final do semestre`)
    }
    
}else{
    console.log(`O aluno Márcio não teve aprovação`)
};

/*
&& -> false && true -> false "o valor mesmo"
|| ->

FALSY
false
0
" "
null / undefined 
NaN
*/

console.log('Márcio' && undefined && "Maria") // aqui é um exemplo de "curto circuito"

// Exemplo de sua utilização 

function falaOi(){
    return "oi";
}

let executar = false
console.log(executar && falaOi())

// As vezes não é preciso que utilize condições, simplificando o código



    
