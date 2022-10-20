const pontuacaoUusario = 999;

if(pontuacaoUusario > 1000){
    console.log("Vip!")
} else{
    console.log("Normal!")
};

// Operação terciária irá simplificar códigos como este acima
// Sitaxe: (condição) ? "Valor para verdadeiro" : "Valor para falso";
const nivelPontuacao = pontuacaoUusario > 1000 ? "Vip!":"Normal!";

console.log(nivelPontuacao)