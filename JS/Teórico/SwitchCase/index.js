const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay;
 let diaSemanaTexto1;

if (diaSemana === 0){
    diaSemanaTexto1 = "Domingo"
}else if (diaSemana === 1){
    diaSemanaTexto1 = "Segunda"
}else if (diaSemana === 2){
    diaSemanaTexto1 = "Terça"
}else if (diaSemana === 3){
    diaSemanaTexto1 = "Quarte"
}else if (diaSemana === 4){
    diaSemanaTexto1 = "Quinta"
}else if (diaSemana === 5){
    diaSemanaTexto1 = "Sexta"
}else if (diaSemana === 6){
    diaSemanaTexto1 = "Sabádo"
};


// O Swithcase é usado nesse tipo de situação em que tem uma variável analisado diversas vezes


function getWeekendDay(diaSemana){
    let diaSemanaTexto = 3;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = "Domingo"
            break;
        case 1:
            diaSemanaTexto = "Segunda"
            break;
        case 2:
            diaSemanaTexto = "Terça"
            break;
        case 3:
            diaSemanaTexto = "Quarta"
            break;
        case 4:
            diaSemanaTexto = "Quinta"
            break;
        case 5:
            diaSemanaTexto = "Sexta"
            break;
        case 6:
            diaSemanaTexto = "Sabádo "
            break;
    }
    return diaSemanaTexto
};

console.log(getWeekendDay(3))
