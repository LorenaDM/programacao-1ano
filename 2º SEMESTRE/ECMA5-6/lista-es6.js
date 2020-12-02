// criando uma variável do tipo função
var cadastra = (vet) => {
   // insere objeto no vetor
    vet.push(
        {
            codigo: Number(prompt(`Informe codigo`)),
            aro: Number(prompt(`Informe aro`)),
            modelo: prompt(`Informe modelo`),
            marca: prompt(`Informe marca`),
            valor: Number(prompt(`Informe valor`)),
            ano: Number(prompt(`Informe ano de fabricação`))
        }
    )
    // se for a primeira bicicleta, vet[0].codigo
    // se for a segunda bicicleta, vet[1].codigo
    console.log(`Bike ${vet[vet.length-1].codigo} inserida com sucesso `)
    }
    
var codigo // escopo globar
var busca = (vet) => {
    codigo = prompt(`Informe codigo`)
    // retorna o primeiro que achar
    let bike = vet.find((objeto) => {
         return objeto.codigo == codigo
        }) // faz um for e verifica se encontra o desejado
    console.log(bike)
}
/* //explicação
//função busca que recebe um vetor como parametro
busca = (vet) => {
    var codigo = prompt(`Informe codido`)
    var achei = vet.find( (objeto) => {
        objeto.codigo == codigo
    })
    console.log(achei)
} */

//no lugar do soma2 eu coloquei o return antes existente
var soma = (vet) => {
    let resultado = vet.reduce((total, objeto) => 
                total + objeto.valor, 0) // faz um for e soma os valores das bikes - inicia a soma com 0
    console.log(`A soma dos valores é ${resultado}`)
}

let marca
var buscaMarca = (vet) => {
    let marca = prompt(`Informe marca`)
    // retorna todos que encontrar
    let novas = vet.filter((objeto) => {
        marca == objeto.marca
    })
    console.log(novas)
}

var soma3 = (vet) => {
    let novo = vet.map((objeto) => {
        objeto.aro = objeto.aro + 3
        objeto
    })
    console.log(novo)
}

let maisVelha = (vet) =>{
    let achou = vet[0].idade
    vet.forEach( (objeto) => {
        if (objeto.ano < achou) {
            achou = objeto.ano
        }
    })
    console.log(achou)
}

var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscaMarca(vetor)

var vetor = [1, 2, 3, 4, 5]
vetor.reduce( (total, elemento) =>{
    total + elemento
}, 0)//iniação
//(0, 1) => 1
//(1, 2) => 3
//(3, 3) => 6
//(6, 4) => 10
//(10, 5) => 15