function meuEscopo(){
    const resultado = document.querySelector(".principal")
    const data = new Date;

    let mesInicial = data.getMonth();
    let mes;

    switch(mesInicial){
        case 0:
            mes = "Janeiro"
            break;
        case 1:
            mes = "Fevereiro"
            break;
        case 2:
            mes = "Março"
            break;
        case 3:
            mes = "Abril"
            break;
        case 4:
            mes = "Maio"
            break;
        case 5:
            mes = "Junho"
            break;
        case 6:
            mes = "Julho"
            break;
        case 7:
            mes = "Agosto"
            break;
        case 8:
            mes = "Setembro"
            break;
        case 9:
            mes = "Outubro"
            break;
        };
    
    const semanas = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabádo"]
    resultado.innerHTML += `${semanas[data.getDay()]},  ${data.getDate()} de ${mes} as ${data.getHours()}:${data.getMinutes()},`
    



}

meuEscopo()