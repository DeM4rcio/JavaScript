// Trocando os valores de uma variável

let animalA = 'girafa';
let animalB = 'elefante'

// output "girafa" e "elefante"

function troca_de_valores(a,b){
     animalA = a;
     animalB = b 
    return console.log(animalA, animalB)
}

troca_de_valores(animalB,animalA)

// output requisitada "elefante" e "girafa"