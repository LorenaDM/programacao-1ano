const { createReadStream } = require("fs")
chefe()
function chefe(){
    //cria o vetor
    var vetor = []
    //chama a função
    cadastra(vetor)
    cadastra(vetor)
    cadastra(vetor)
    mostra(vetor)
}

function cadastra(vet){
    //a variavel vet representa a variavel vetor - escopo global
    //cria o obj
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe o código"))
    objeto.qtde = Number(prompt("Informe a quantidade"))
    objeto.preco = Number(prompt("Informe o preço"))
    objeto.nome = prompt("Informe o nome")
    //add o obj no vetor
    vet.push(objeto)
    console.log(`Produto ccadastrado com sucesso`)
}
function mostra(){
    //a variavel vet representa o escopo global
    for(var i = 0; i < vet.length; i++){
        console.log(vet[i])
    }
}    
