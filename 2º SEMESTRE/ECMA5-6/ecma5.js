//REVISÃO
//função forEach() === SUBSTITUI O FOR == "itera no vetor"
var numeros = [2, 4, 6, 8]
numeros.forEach(exe1)
numeros.forEach(exe2)
//exe1(2, 0)
//exe1(4, 1)
//exe1(6, 2)
function exe1(elemento, posicao){
    //vamos mostar apenas elementos pares nas posições pares
    if((elemento % 2 == 0) && (posicao % 2 == 0)){
        console.log(elemento)
    }
}

function exe2(elemento){
    if(elemento % 2 == 0){
        console.log(elemento)
    }
}

//função map === não altera o tamanho do vetor resultante
var vetor = [4, 6, 9, 13, 18]
var novo = vetor.map(exe3)//intera no vetor
var novo2 = vetor.map(exe4)//intera no vetor
console.log(novo) // [14, 16, 19, 23, 28]
console.log(novo2) //[4, 6, undefined, undefined, 18]
                            //impar ficou undefined

function exe3(elemento){
    return elemento + 10
}

function exe4(elemento){
    if(elemento % 2 == 0){
        return elemento
    }
}

//função filter === pode alterar o tamanho do vetor resultante
var eleitos = [4, 6, 7, 9, 12, 13]
var novosEleitos = eleitos.filter(exe5)
console.log(novosEleitos)

function exe5(elemento){
    return elemento < 10 //menor que 10
}

//função reduce === reduz o vetor a um único valor
var idades = [7, 8, 9, 10, 11, 12, 13, 14]
var soma = idades.reduce(exe6)
console.log(soma)
// 1 ª vez exe6(7, 8) -> 15
//exe6(15, 9) -> 24
//exe6(24, 10) -> 34
//exe6(34, 11) -> 45
function exe6(total, elemento){
    return total + elemento

}
/* //sub
var idades = [7, 8, 9, 10, 11, 12, 13, 14]
var soma = idades.reduce(exe6)
console.log(soma)
// 1 ª vez exe6(7, 8) -> 15
//exe6(15, 9) -> 24
//exe6(24, 10) -> 34
//exe6(34, 11) -> 45
function exe6(total, elemento){
    return total - elemento
    
} */

//função some === se existe algum valor no  ==== Retorna valor booleano TRUE OR FALSE
var nomes = ["Pedro", "Lucas", "Carlos"]
var result = nomes.some(exe7)
console.log(result)

function exe7(elemento){
    return elemento == "Lucas"
}

var notas = [8, 4, 6, 9, 1]
var maior = notas.reduce(exe8)
console.log(maior)

//mantem e retorna o valor maior
// exe8(8, 4) -> 8
// exe8(8, 6) -> 8
// exe8(8, 9) -> 9
// exe8(9, 1) -> 9
function exe8(resultado, elemento){
   return resultado > elemento ? resultado : elemento
    /* if(resultado > elemento){
        return resultado   
    }else{
        return elemento
    } */

}

//estudar
//parse()
//stringify()
//classes
w3schools