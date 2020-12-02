
// exeemplos de JS utilizando a especificação ES5
chefe()
var conteudo = ""
function chefe(){
    let vetor = [10, 30, 50, 70, 90, 110, 130, 150, 170]
    
    //js
    //percorrer o vetor - estrutura de repetição
    /* for(let i=0; i < ventor.length; i++){
        console.log(`O elemento p${vetor[i]} está na posição ${i}`)
    } */
   
    //ECMA
  //  vetor.forEach(mostra)
    vetor.forEach(acumula)
   // console.log(conteudo)
    //forEach mostra
    //funcao(10, 0)
    //funcao(30, 1)
    //funcao(50, 2)
}

//os paraetros são o elemnto e a posicao
/* function mostra(elemento, posicao){
    /* function mostra(elemento, posicao){
        console.log(`O elemnto ${elemento} está na posição ${posicao}`)
    } 
    if(posicao % 2 == 0){
        console.log(`O elemento ${elemento} está em posição par`)

    }else{
        console.log(`O elemento ${elemento} está em posição impar`)
    }
} */
//os parametros são somente o ELEMENTO
function acumula(elemento){
    conteudo = conteudo + " = " + elemento
}

//Função map
var idades = [10, 13, 17, 18, 19, 20, 22, 26]
var novo = idades.map(multiplica) //estamos fazendo um var no vetor
//multiplica(10)
//multiplica(13)
//multiplica(17)
//console.log(novo)
/* function multiplica(elemento){
    return elemento * 2 //todos os elemntos do vetor serão multiplicdos por 2
} */

var result = idades.map(ParImp)
console.log(result)

function ParImp(elemento){
    if(elemento % 2 == 0){
        return 0
    }
    else{
        return 1
    }
}
//=============Podemos criar váriaveis do tipo FUNÇÃO====================
var x = function teste(){
    console.log(`variáveis do tipo de uma função`)
}
x()

var soma = function soma(a, b){
    console.log(a + b)
}
soma(3, 6)
var sub = function sub(a, b){
    console.log(a - b)
}
sub(6, 1)

var vet = [1, 2, 3, 4, 5]
var novo3 = vet.filter(maior)
function maior(elemento){
    return elemento >= 3
}
//filter
//reduce
//some