function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    function evento(evento){
        evento.preventDefault();

        const pesoInput = form.querySelector(".Peso");
        const alturaInput = form.querySelector(".Altura");

        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);
        
        function getImc (peso, altura){
            const imc = peso/(altura**2)
            return imc.toFixed(2)
        };

        const IMC = getImc(peso, altura)
       
        
        if (IMC < 18.5){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de ABAIXO DO PESO `
        } else if (IMC >= 18.5 && IMC < 24.5){
            resultado.innerHTML += `<p> Seu IMC é de ${IMC } com classificação de PESO NORMAL `
        } else if (IMC >= 24.5 && IMC < 29.9){
            resultado.innerHTML += `<p> Seu IMC é de ${IMC } com classificação de SOBREPESO `
        } else if (IMC >= 30 && IMC < 34.9){
            resultado.innerHTML += `<p> Seu IMC é de ${IMC } com classificação de OBESIDADE GRAU 1 `
        } else if (IMC >= 35 && IMC < 39.9){
            resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de OBESIDADE GRAU 2 `
        } else if (IMC > 40){
            resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de OBESIDADE GRAU 3 `
            }


        
    };
    
    form.addEventListener('submit', evento);



};
meuEscopo()