//Variaveis de escopo local
//esxiste apens enquanto a função onde ela foi criada esta executando

function soma10(num){
    var soma = num + 10
    //retorna para var result 
    return soma 
}
//chama soma10
//não faz nada, pde para os outros fazerem
function chefe(){   
    var result = soma10(7)  
}
console.log(result)
chefe()  

//primeiro a ser executado, chama a função chefe 
 function teste(num){
    var aux = num + 3
}// escopo local, só se pode usar dentro da função
console.log(aux) 

/function soma10(num){ //escopo local => valor
    num = num + 10
}
function chefe(){//a leitura começa aqui
    var x = 20
    soma10(x)
    console.log(x)//valor de x continua sendo 20, pois o escopo é local
} 

function entrada(vet){ 
    vet.push(6)// vai para vetor
    vet.push(7)// vai para vetor
    vet.push(8)// vai para vetor
}

function busca(vet, x){
    var resp = vet.indexOf(x)//descobre a posição
    if(resp == -1){
        console.log('elemnto não encontrado')
    }else{
        console.log('elemnto encontrado na posição ${resp}')
    }
}

function chefe(){
    var vetor = []
    entrada(vetor)//escopo global VETOR É OBJETO
    console.log(vetor)//nome diferente não importa
    //busca(8)
    busca(vetor, 8)
}