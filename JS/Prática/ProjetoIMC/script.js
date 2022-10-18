function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    function evento(evento){
        evento.preventDefault();

        const peso = form.querySelector(".Peso");
        const altura = form.querySelector(".Altura");
        
       
        const IMC = peso.value/(altura.value**2)
        
            if (IMC < 18.5){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de ABAIXO DO PESO `
            }else if(IMC >= 18.5 && IMC < 24.5){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de PESO NORMAL `
            }else if(IMC >= 24.5 && IMC < 29.9){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de SOBREPESO `
            }else if(IMC >= 30 && IMC < 34.9){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de OBESIDADE GRAU 1 `
            }else if(IMC >= 35 && IMC < 39.9){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de OBESIDADE GRAU 2 `
            }else if(IMC > 40){
                resultado.innerHTML += `<p> Seu IMC é de ${IMC} com classificação de OBESIDADE GRAU 3 `
            }


        
    };
    
    form.addEventListener('submit', evento);



};
meuEscopo()