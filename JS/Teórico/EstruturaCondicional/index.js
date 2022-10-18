// Condições para a execução de um código 
// Exemplo

const hora =23;
    //condição
if (hora >= 13 && hora <= 17){
    console.log("Boa tarde!")
  // aqui haverá outra verificação da condição   
}else if(hora < 13 && hora >= 0){
    console.log("Bom dia!")
}else if(hora >= 18 && hora <= 23){
    console.log("boa noite")
}

// o código para de rodar quando encontra a primeira condição verdadeira, deixando de rodar todas as condições po
// posteriormente