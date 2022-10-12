// Criar um objeto que contém:

//Rua, Cidade, Cep, Exibir_endereço(endereço)

const endereco = {
    Rua: 1,
    Cidade: 'Brasília',
    Cep:'73422300',
}

function Exibir_endereço(endereco){
    for (let chave in  endereco)
        console.log(chave,endereco[chave]);
}

Exibir_endereço(endereco)