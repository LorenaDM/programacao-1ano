//For each
//Função do tipo array, serve para executar um bloco de código para CADA elemnto desse array(lista)

listaArray = [1, 2, 3, 4, 5, 6, 7]

listaArray.forEach((elemento) =>{
  console.log(elemento)
})

//REDUCE
listaArray = [1, 2, 3, 4, 5, 6, 7]
let par = listaArray.reduce((elemento, posicao) =>{
  if(posicao % 2 == 0){
    return elemento
  }
}) 
console.log(par)
//Quando precisamos reduzir o array em um tipo de dado.Poder e versátilidade
vetor = [-20, 30, -10, 45]
//0 valor inicial, boa prática
//let soma = vetor.reduce((acm, elemento) => acm + elemento, 0)

vetor = [-20, 30, -10, 45]
let soma = vetor.reduce((acm, elemento) =>{
  return acm + elemento
})
console.log(soma)

//
vetor = [-20, 30, -10, 45]

let testeMap;

testeMap = vetor.map((acm, elemento) =>{
  
    return acm + elemento

})
console.log(testeMap)




//Filter
//filtra os objetos e retorna o array de acordo com o crtério
vet = [2, 4 , 6 , 8, 9 , 11, 13, 15, 17, 20]

let posicaoPar = vet.filter((elemento, posicao) =>{
  if (posicao % 2 == 0){
      return elemento
  }
})
console.log(posicaoPar)

//Find
//localiza um único objeto no array e retorna esse obj
vet2 = [2, 4 , 6 , 8, 9 , 11, 13, 15, 17, 20]
let posicaoPrimeiroImpar = vet.find((elemento, posicao) =>{
  if (posicao % 2 == 1){
      return elemento
  }
})
console.log(posicaoPrimeiroImpar)
//MAP
//cria um novo array com o resultado da função que eu passar como parametro
//manipula um array e cria outro array com o resultado
listaArray = [1, 2, 3, 4, 5, 6, 7]

let testeMap;

testeMap = listaArray.map((elemento, posicao) =>{
  if (posicao % 2 == 1){
    return elemento
} 
})
console.log(testeMap)

/* ListaNotas = [8, 4, 6, 9, 1, 7, 5]
let testeMap;

testeMap = ListaNotas.map((resultado, elemento) =>{
  if(resultado > elemento){
        return resultado   
    }
    else{
        return elemento
    } 
  
})
console.log(testeMap)
 */




/* var ListaNotas = [8, 4, 6, 9, 1]
var maiorNota = ListaNotas.reduce(testeRed)
console.log(maiorNota)

function testeRed(resultado, elemento){
   return resultado > elemento ? resultado : elemento

} */

/* var ListaNotas = [8, 4, 6, 9, 1, 7, 5]
var maiorNota = ListaNotas.reduce(testeRed)
console.log(maiorNota)

function testeRed(resultado, elemento){
   return resultado > elemento ? resultado : elemento

} */

