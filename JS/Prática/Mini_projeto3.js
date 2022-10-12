// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é número'

function FizzBuzz(a){
    
    if ( typeof(a) !== 'number'){
        console.log('Não é um numero')
    }

    else if (a % 3 === 0 && a % 5 === 0) {
        console.log('FizzBuzz')
    }

    else if(a % 3 === 0){
        console.log('Fizz')
    }

    else if(a % 5 === 0){
        console.log('Buzz')
    }

    else if (a % 3 !== 0 && a % 5 !== 0) {
        console.log('Não é divisivel por 3 e 5')
    }

}

FizzBuzz(15)