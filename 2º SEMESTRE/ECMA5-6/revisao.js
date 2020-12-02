
// utilização das arrow functions
// usando o forEach -> percorre um vetor sem usar for, while e do
var vetor = [1, 3, 7, 5, 9, 0, 4]
// percorrer o vetor e mostrar os valores que são pares
vetor.forEach( (elemento) => {
    if (elemento % 2 == 0){
        console.log(elemento)
    }
})

// usando o reduce -> percorrer o vetor, mas ele retorna um valor único que reduz o vetor 

let soma = vetor.reduce( (acumula, elemento) => {
   return acumula + elemento 
})

//(1, 3) -> 4
//(4, 7) -> 11
//(11, 5) -> 16
//(16, 9) -> 25
//(25, 0) -> 25
//(25, 4) -> 29
console.log(soma)

// filter e find -> ambos retornam um novo vetor
// filter retorna um novo vetor podendo ter 1 ou mais elementos
let novo = vetor.filter( (elemento, posicao) => {
    if (posicao % 2 == 1){ // retorna todos os elementos nas posições ímpares
        return elemento
    }
})
console.log(novo)

// find retorna um novo vetor tendo apenas 1 único elemento
let novo = vetor.find( (elemento, posicao) => {
    if (posicao % 2 == 1){ // retorna o primeiro elemento na posição ímpar
        return elemento
    }
})
console.log(novo)


// tudo que fizemos vale para um vetor de objetos também
var cidades = []

let objeto = new Object()
objeto.cidade = "franca"
objeto.estado = "SP"
cidades.push(objeto)

let objeto2 = new Object()
objeto2.cidade = "Belo Horizonte"
objeto2.estado = "MG"
cidades.push(objeto2)


let paulista = cidades.filter( (elemento) => {
    if (elemento.estado == "SP"){
        return elemento
    }
})

console.log(paulista)