//utilização das arrow functions
//usando o forEach -> percorre um vetor sem usar for, while e do
var vetor = [1, 3, 7, 5,  9, 0, 4]
//percorre o veot e mostrar os valores que são pares
vetor.forEach( (elemento) => {
    if(elemento % 2 == 0){
        console.log(elemento)
    }
})

//usando o REDUCE -> percorre o vetor, mas ele retorna um valor que reduz o vetor

let soma = vetor.reduce((acumula, elemento) =>{
    return acumula + elemento
})
/* (1, 3) => 4
   (4, 7) => 11
   (11, 5) => 16*/
console.log(soma)

//filter e find => ambos retornaram um novo vetor
//filter retorna um novo vetor podendo ter 1 ou mais elemntos
let novo = vetor.filter ((elemnto, posicao) =>{
    if(posicao % 2 == 1){ //retorna o primeiro na posição ímpar
        return elemento
    }
})
console.log(novo)

//tudo que fizemos vale para um vetor de objetos também
var cidades = []
let objeto = new Object()
objeto.cidade = 'franca'
objeto.estado = 'sp'
cidades.push(objeto)


let objeto2 = new Object()
objeto2.cidade = 'belo horizonte'
objeto2.estado = 'mg'
cidades.push(objeto2)

let paulista = cidades.filter( (elemento) => {
    if(elemento.estado == 'sp'){
       return elemento
    }
})
console.log(paulista)

//find retorna um novo vetor tendo apenas 1 único elemento