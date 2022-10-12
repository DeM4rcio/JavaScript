// if..else

let hora = 22;
    //condição
if(hora > 6 && hora < 12){
    console.log("bom dia!")
}

else if (hora > 12 && hora < 18){
    console.log('boa tarde!')
}

else {
    console.log("boa noite!")
}

// Switch case
let permissao; //comum,gerente,diretor
permissao = 'diretor' //output 'usuário diretor'
switch (permissao){
    case 'comum':
        console.log('usuário comum')
        break
    
    case 'gerente':
        console.log('usuário gerente')
        break

    case 'diretor':
        console.log('usuário diretor')
        break

    default:
        console.log('usuário não reconhecido')
}

// Loops: 
    // For

    //indice inicial, até quando o loop vai acontecer, 
    for(let i = 0; i < 5;i++){
        console.log('estou aprendendo')
    }

    // While
    let r = 5;

    while (r >= 1) {
        if (r % 2 !== 0) {
        console.log(r)
    }
    r--;
    }

    // Do...While

    do{
        // executa primeiro depois a condição
        console.log('digitando!');
        r++;
    } while (r < 10);

    // For...in

    const pessoa = {
        nome: 'Márcio',
        idade: 20
    }

    for(let chave in pessoa){
        console.log(chave,pessoa['nome']);
    }

    const cores = ['Vermelho', 'Azul', 'Verde']

    for (let indice in cores){
        console.log(indice,cores[indice])
    }

    // For...of

    for(let cor of cores){
        console.log(cor)
    }