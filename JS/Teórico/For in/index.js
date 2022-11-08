const frutas = ["pera", "Maça", "uva"]
 
// A diferença está na indexação que é atribuida a lista referida
// Ela retorna um indice
for (let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome: "Márcio",
    sobrenome: "otávio"
}

for (let i in pessoa){
    console.log(pessoa[i])
}