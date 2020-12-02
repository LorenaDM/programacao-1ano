//es1, es2, es3, es4
function soma(x, y){
    console.log(x+y)
}
soma(2, 7)

//es5
let soma = function(x, y){
    console.log(x+y)
}
soma(2, 7)

//es6
//arrow functions
//antes da seta temos os parametros da função (x, y)
//depois da seta temos a implementação da função (console.log(x + y))
//ausência da palavra FUNCTION
//função anônima - função sem nome
let soma = (x, y) => console.log(x + y)
soma(2, 7)

//find retorna a priemira ocorrencia nesse caso o 7
//filter retorna tds as ocorrencias
let vet = [2, 4, 7, 9, 11]
let novo = vet.filter(elemento => elemento > 5)
console.log(novo)

let vet = [2, 4, 7, 9, 11]
console.log(vet.filter(elemento => elemento > 5))