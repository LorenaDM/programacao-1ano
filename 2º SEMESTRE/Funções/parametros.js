
function soma100(nro){ //2
    return nro + 30 //3
}

var result = soma100(70) // 1 programa começa lendo aqui
console.log(result) //5

//variável de escopo local
function soma200(nro){
    nro = nro + 200

}
var numero = 30 // variavel de escopo local - vRIAVEL EXISTE SOMENTE DENTRO DA FUNÇÃO
soma200(numero)
console.log(numero)

// variavel de escopo global - variavel existe em todo o programa
// essa váriavel em java script deve ser um objeto ou um vetor

function soma300(vet){//vet tem escopo global
    vet[0] = vet[0] + 300//escopo global
    vet[1] = vet[1] + 300
}

var vetor = [9, 5]
soma300(vetor)
console.log(vetor)

function chefe(){
    var vetor = []
    comprar(vetor)
    relato1(vetor)
    relato2(vetor)
    relato3(vetor)
}
function comprar(vet){
    vet[0] = 100
}
function relato1(vet){
    console.log(vet[0])
}
function relato2(vet){
 
}
function relato3(vet){
 
}