// Se ultiliza função, para que haja a protenção de qualquer ação global
function meuEscopo (){
    const form = document.querySelector('.form'); // aqui está tendo a referencia da tag do HTML no script
    const resultado = document.querySelector(".resultado")
    
    const pessoas = []

    function recebeEvento(evento){
        evento.preventDefault();

       const nome = form.querySelector(".nome");
       const Sobrenome = form.querySelector(".Sobrenome");
       const Altura = form.querySelector(".Altura");
       const Peso = form.querySelector(".peso");
        
       pessoas.push = {
            nome: nome.value,
            Sobrenome: Sobrenome.value,
            Altura: Altura.value,
            Peso: Peso.value,
        };
        console.log(pessoas)

        resultado.innerHTML += `<p> ${nome.value} ${Sobrenome.value} ${Peso.value} ${Altura.value} `
    }
    
                        // a forma ;função responsável pelo output da ação
    form.addEventListener('submit', recebeEvento); // aqui é uma função quer recebe um ação
}
meuEscopo();