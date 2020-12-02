
//========================ANTES====================================
/* var vetor = [];

cadastra(vetor);

cadastra(vetor); */

//a nossa função pode ser uma várivel
//criando uma váriavel do ipo função
/* var cadastra = function(vet){
   /*  //criandoo objeto
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.aro = Number(prompt(`Informe o aro`))
    objeto.modelo = prompt(`Informe o modelo`)
    objeto.marca = prompt(`Informe o marca`)
    objeto.valor = Number(prompt(`Informe o valor`))
    objeto.ano = Number(prompt(`Informe o ano de fabricação`))
    //insere obj no vetor
    vet.push(objeto)
    console.log(`Bike ${objeto.codigo} inserida com sucesso`) 
} */

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
 var busca = function(vet){
     codigo = prompt(`Informe codigo`)
     // retorna o primeiro que achar
     let bike = vet.find(busca2) // faz um for e verifica se encontra o desejado
     console.log(bike)
 }
 // busca2(bike0)
 // busca2(bike1)
 // bsuca2(bike2)
 function busca2(objeto){
     return objeto.codigo == codigo
 }
 
 var soma = function(vet){
     let resultado = vet.reduce(soma2, 0) // faz um for e soma os valores das bikes - inicia a soma com 0
     console.log(`A soma dos valores é ${resultado}`)
 }
 
 // a bike 0 tem valor 10 - a bike 1 tem valor 20 - a bike 2 tem valor 30
 //soma2(0, bike0) -> 10
 // soma2(10, bike1) -> 30
 // soma2(30, bike2) -> 60
 function soma2(total, objeto){
     return total + objeto.valor
 }
 
 var marca
 var buscaMarca = function(vet){
     marca = prompt(`Informe marca`)
     // retorna todos que encontrar
     let novas = vet.filter(buscaMarca2)
     console.log(novas)
 }
 
 function buscaMarca2(objeto){
     return marca == objeto.marca
 }
 
 
 var soma3 = function(vet){
     let novo = vet.map(soma32)
     console.log(novo)
 }
 
 function soma32(objeto){
     objeto.aro = objeto.aro + 3
     return objeto
 }
 var vetor = []
 cadastra(vetor)
 cadastra(vetor)
 cadastra(vetor)
 busca(vetor)
 soma(vetor)
 buscaMarca(vetor)