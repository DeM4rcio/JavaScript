function meuEscopo (){

    const container = document.querySelector(".container");
    const div = document.createElement("div");
    let elementos = [
        {tag: "p", nome:"texto1"},
        {tag: "div", nome: "texto2"},
        {tag: "section  ", nome: "texto3"},
        {tag: "footer", nome: "texto4"},
    ];

    for(let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let tagCriada = document.createElement(tag)
        tagCriada.innerHTML = texto;
        div.appendChild(tagCriada)
    };

    container.appendChild(div);

    








}

meuEscopo()