let num = 10.712893712987231987;
// Podemos arrendondar o valor

console.log(num.toFixed(2)); // quantas casas será mostrado
console.log(num.toString()); // transformando em string

let numero1 = 0.7;
let numero2 = 0.1;

// A soma desses dois numeros terá uma imprecissão dos resultados

console.log(numero1 + numero2)

// A resolução desta precisão pode ser tratada da seguinte maneira

numero1 += numero2;
numero1 = Number(numero1.toFixed(2)); // transformamos em tipo numérico e depois arrendondamos para duas casas decimais

console.log(numero1)
